export default async function handler(req, res) {
  try {
    // Forward dữ liệu sang Apps Script Web App
    const gasUrl = "https://script.google.com/macros/s/AKfycbydtJmWUOH-pNiPlBQ9Xf-nmlkOJ-iQOFS8I0TUT6vNhWipjqbmfup3VIs8A32Im_pSYw/exec";

    await fetch(gasUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "forward failed" });
  }
}
