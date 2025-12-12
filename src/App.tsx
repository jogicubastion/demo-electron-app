import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 59) {
          setMinutes((m) => {
            if (m === 59) {
              setHours((h) => h + 1);
              return 0;
            }
            return m + 1;
          });
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Clock className="w-12 h-12 text-blue-600" />
            <h1 className="text-6xl font-bold text-slate-900">Hello!</h1>
          </div>
          <p className="text-xl text-slate-600">Welcome to your Electron Timer App</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-slate-200 shadow-2xl">
          <div className="flex items-center justify-center gap-4 text-7xl font-mono font-bold text-slate-900">
            <div className="flex flex-col items-center">
              <span className="text-8xl">{formatTime(hours)}</span>
              <span className="text-sm text-slate-500 mt-2">Hours</span>
            </div>
            <span className="text-blue-600">:</span>
            <div className="flex flex-col items-center">
              <span className="text-8xl">{formatTime(minutes)}</span>
              <span className="text-sm text-slate-500 mt-2">Minutes</span>
            </div>
            <span className="text-blue-600">:</span>
            <div className="flex flex-col items-center">
              <span className="text-8xl">{formatTime(seconds)}</span>
              <span className="text-sm text-slate-500 mt-2">Seconds</span>
            </div>
          </div>
        </div>

        <div className="text-slate-500 text-sm">
          Timer started when app launched
        </div>
      </div>
    </div>
  );
}

export default App;
