import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [form, setForm] = useState({ title: "", description: "", budget: 0 });
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${API_URL}/campaigns`).then(res => setCampaigns(res.data));
  }, []);

  const createCampaign = async () => {
    await axios.post(`${API_URL}/campaigns`, form);
    const res = await axios.get(`${API_URL}/campaigns`);
    setCampaigns(res.data);
  };



  return (
    <div style={{ padding: "2rem" }}>
      <h1>📢 Campaigns</h1>
      <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
      <input type="number" placeholder="Budget" onChange={e => setForm({ ...form, budget: Number(e.target.value) })} />
      <button onClick={createCampaign}>Create Campaign</button>

      <ul>
        {campaigns.map(c => (
          <li key={c.id}>{c.title} — ${c.budget}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
