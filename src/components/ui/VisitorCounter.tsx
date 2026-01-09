'use client';

import { useEffect, useState, useRef } from 'react'; // Tambah useRef
import { supabase } from '../../lib/supabase';
import { Users } from 'lucide-react';

export const VisitorCounter = () => {
  const [stats, setStats] = useState<{ views: number } | null>(null);
  const hasRun = useRef(false); // Ref untuk mencegah double execution di Strict Mode

  useEffect(() => {
    // Cegah eksekusi ganda jika sudah pernah berjalan di siklus render ini
    if (hasRun.current) return;

    const trackVisitor = async () => {
      const storageKey = 'has_visited_site';
      const hasVisited = localStorage.getItem(storageKey);

      // Hanya increment jika belum pernah berkunjung (tidak termasuk refresh dari visitor yang sama)
      if (!hasVisited) {
        localStorage.setItem(storageKey, 'true');

        // Increment views hanya untuk visitor baru
        await supabase.rpc('increment_stats', {
          p_path: 'home',
          is_unique: true,
        });
      }
      // Jika sudah pernah berkunjung (refresh), tidak ada yang diincrement

      // Ambil data terbaru
      const { data } = await supabase.from('visitor_stats').select('views').eq('id', 1).single();

      if (data) setStats({ views: data.views });
    };

    trackVisitor();
    hasRun.current = true; // Tandai bahwa effect sudah dijalankan

    // Real-time Subscription tetap sama...
    const channel = supabase
      .channel('visitor_realtime')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'visitor_stats',
          filter: 'id=eq.1',
        },
        (payload) => {
          setStats({ views: payload.new.views });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (!stats) return null;

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
      <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
        <Users size={12} />
        {stats.views.toLocaleString()}
      </span>
    </div>
  );
};
