import { useEffect, useState } from 'react';
import { askGPT } from '../utils/gpt';
import { initTelegram } from '../utils/telegram';

export default function Home() {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<string[]>([]);

  useEffect(() => {
    initTelegram();
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setChat((prev) => [...prev, `👤 ${input}`]);
    const reply = await askGPT(input);
    setChat((prev) => [...prev, `🤖 ${reply}`]);
    setInput('');
  };

  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h2>GPT WebApp Chat</h2>
      <div style={{ marginBottom: 20 }}>
        {chat.map((msg, i) => (
          <div key={i} style={{ marginBottom: 10 }}>{msg}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите сообщение..."
        style={{ width: '100%', padding: 10 }}
      />
      <button onClick={sendMessage} style={{ marginTop: 10, padding: 10, width: '100%' }}>
        Отправить
      </button>
    </main>
  );
}
