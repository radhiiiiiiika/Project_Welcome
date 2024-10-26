const happy_quotes = ["A very good morning!! :)",
    "Have an awesome day!!","The sun is very bright today, hope you have a great day","Smile! Today will be great",
    "A smile would like great on you! Keep smiling"];
    const idx = Math.floor(Math.random()*5);
    document.getElementById("quotes").innerHTML = happy_quotes[idx];