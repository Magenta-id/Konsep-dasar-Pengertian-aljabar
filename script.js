
document.addEventListener("DOMContentLoaded", function () {

    const backToTop = document.getElementById("backToTop");

    if (!backToTop) return;

    // Tampilkan tombol setelah scroll 300px
    function toggleBackToTop() {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    }

    // Pantau posisi scroll
    window.addEventListener(
        "scroll",
        toggleBackToTop,
        { passive: true }
    );

    // Kembali ke bagian atas
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Periksa posisi awal halaman
    toggleBackToTop();

});

window.initAljabarQuiz = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Database Soal Lengkap: 3 Level & 2 Tipe (Polos & Cerita)
  const questionDatabase = {
    mudah: {
      polos: [
        {
          question: "Tentukan unsur dari bentuk aljabar berikut: manakah yang merupakan variabel pada \\(3x + 5\\)?",
          options: ["3", "x", "5", "Tidak ada"],
          answer: 1,
          explanation: "Variabel adalah lambang atau huruf yang mewakili suatu bilangan yang belum diketahui nilainya, yaitu \\(x\\)."
        },
        {
          question: "Pada bentuk aljabar \\(7a - 4\\), angka \\(7\\) bertindak sebagai...",
          options: ["Variabel", "Konstanta", "Koefisien", "Suku"],
          answer: 2,
          explanation: "Angka \\(7\\) terletak di depan variabel \\(a\\) dan berfungsi mengalikannya, sehingga disebut koefisien."
        }
      ],
      cerita: [
        {
          question: "Harga satu buku tulis adalah \\(x\\) rupiah. Jika seseorang membeli 4 buku tulis, bentuk aljabarnya adalah...",
          options: ["x + 4", "4x", "4 + x", "x - 4"],
          answer: 1,
          explanation: "Pembelian beberapa barang sejenis dinyatakan dengan perkalian antara jumlah barang dan harga satuannya, yaitu \\(4x\\)."
        },
        {
          question: "Budi memiliki sejumlah kelereng yang dinyatakan dengan huruf \\(y\\). Ia diberi lagi \\(5\\) buah kelereng oleh temannya. Jumlah seluruh kelereng Budi sekarang adalah...",
          options: ["5y", "y - 5", "y + 5", "5 - y"],
          answer: 2,
          explanation: "Kata 'diberi lagi' berarti bertambah, sehingga penjumlahannya ditulis sebagai \\(y + 5\\)."
        }
      ]
    },
    menengah: {
      polos: [
        {
          question: "Berapakah koefisien dari variabel \\(y\\) pada bentuk aljabar \\(-5y + 8\\)?",
          options: ["5", "-5", "8", "-8"],
          answer: 1,
          explanation: "Waspadai tanda negatif! Koefisien dari \\(y\\) mencakup tanda di depannya, yaitu \\(-5\\)."
        },
        {
          question: "Tentukan konstanta dari bentuk aljabar \\(6m - 12\\).",
          options: ["6", "12", "-12", "m"],
          answer: 2,
          explanation: "Konstanta adalah suku yang tidak memuat variabel dan berdiri sendiri, yaitu \\(-12\\)."
        }
      ],
      cerita: [
        {
          question: "Umur Ani sekarang adalah \\(z\\) tahun. Berapa umur Ani \\(5\\) tahun mendatang?",
          options: ["5z", "z - 5", "z + 5", "5 - z"],
          answer: 2,
          explanation: "Frasa 'tahun mendatang' menyatakan masa depan atau penambahan usia, sehingga ditulis \\(z + 5\\)."
        },
        {
          question: "Harga satu buku \\(x\\) rupiah dan satu pensil \\(y\\) rupiah. Jika membeli 2 buku dan 3 pensil, bentuk aljabarnya adalah...",
          options: ["2x + 3y", "3x + 2y", "5xy", "x + y + 5"],
          answer: 0,
          explanation: "Dua buku ditulis \\(2x\\) dan tiga pensil ditulis \\(3y\\), totalnya dijumlahkan menjadi \\(2x + 3y\\)."
        }
      ]
    },
    sulit: {
      polos: [
        {
          question: "Perhatikan bentuk aljabar \\(x + 5\\). Berapakah koefisien dari variabel \\(x\\)?",
          options: ["0", "1", "5", "Tidak terdefinisi"],
          answer: 1,
          explanation: "Variabel tanpa angka di depannya sebenarnya memiliki koefisien \\(1\\) (karena \\(x = 1x\\))."
        },
        {
          question: "Berapakah nilai dari bentuk aljabar \\(4x + 7\\) jika diketahui \\(x = 3\\)?",
          options: ["12", "15", "19", "21"],
          answer: 2,
          explanation: "Substitusikan \\(x = 3\\) ke dalam \\(4(3) + 7 = 12 + 7 = 19\\)."
        }
      ],
      cerita: [
        {
          question: "Keliling sebuah persegi dengan panjang sisi \\(s\\) cm adalah \\(4s\\). Jika panjang sisi persegi tersebut \\(6\\) cm, berapakah kelilingnya?",
          options: ["10 cm", "24 cm", "36 cm", "12 cm"],
          answer: 1,
          explanation: "Masukkan nilai \\(s = 6\\) ke dalam rumus \\(4s\\), yaitu \\(4 \\times 6 = 24\\) cm."
        },
        {
          question: "Uang tabungan Siska adalah \\(m\\) rupiah. la mengambil uangnya sebesar Rp10.000, lalu sisanya dibagi rata ke dalam \\(2\\) amplop. Bentuk aljabar untuk isi satu amplop adalah...",
          options: ["\\(\\frac{m - 10000}{2}\\)", "\\(\\frac{m}{2} - 10000\\)", "\\(2m - 10000\\)", "\\(\\frac{m}{2} + 5000\\)"],
          answer: 0,
          explanation: "Tabungan dikurangi Rp10.000 menjadi \\((m - 10000)\\), lalu dibagi dua menjadi \\(\\frac{m - 10000}{2}\\)."
        }
      ]
    }
  };

  let currentLevel = 'mudah';
  let currentType = 'polos';
  let currentQuestion = null;
  let answered = false;

  // Render Struktur Kuis ke dalam Satu Kontainer Utuh
  container.innerHTML = `
    <div class="quiz-header">
      <h3>Kuis Pemahaman Aljabar Dasar</h3>
      <p>Pilih level dan tipe soal untuk mulai berlatih secara acak!</p>
      
      <div class="quiz-controls">
        <div class="control-group" id="level-selectors">
          <span style="font-size: 0.8rem; font-weight: bold; align-self: center; margin-right: 4px;">Level:</span>
          <button class="ctrl-btn active" data-level="mudah">Mudah</button>
          <button class="ctrl-btn" data-level="menengah">Menengah</button>
          <button class="ctrl-btn" data-level="sulit">Sulit</button>
        </div>
        
        <div class="control-group" id="type-selectors">
          <span style="font-size: 0.8rem; font-weight: bold; align-self: center; margin-right: 4px;">Tipe:</span>
          <button class="ctrl-btn active" data-type="polos">Soal Polos</button>
          <button class="ctrl-btn" data-type="cerita">Soal Cerita</button>
        </div>
      </div>
    </div>
    <div id="quiz-body"></div>
  `;

  const bodyEl = container.querySelector('#quiz-body');

  function getRandomQuestion() {
    const pool = questionDatabase[currentLevel][currentType];
    // Ambil soal secara acak dari kategori yang dipilih
    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
  }

  function loadNewQuestion() {
    answered = false;
    currentQuestion = getRandomQuestion();

    bodyEl.innerHTML = `
      <div class="quiz-card">
        <div style="font-size: 0.75rem; font-weight: 700; color: #4a5568; margin-bottom: 6px; text-transform: uppercase;">
          Latihan (${currentLevel.toUpperCase()} - ${currentType.toUpperCase()})
        </div>
        <div class="quiz-question">${currentQuestion.question}</div>
        <div class="quiz-options">
          ${currentQuestion.options.map((opt, idx) => `
            <button class="quiz-option-btn" data-index="${idx}">${opt}</button>
          `).join('')}
        </div>
        <div class="quiz-feedback" id="quiz-feedback"></div>
      </div>
      <div class="quiz-footer">
        <button class="quiz-next-btn" id="quiz-next-btn">Soal Berikutnya ➔</button>
      </div>
    `;

    // Render ulang MathJax agar simbol LaTeX di dalam teks soal terbaca dengan baik
    if (window.MathJax && typeof MathJax.typeset === 'function') {
      MathJax.typeset([bodyEl]);
    }

    // Event listener pilihan jawaban
    const optionBtns = bodyEl.querySelectorAll('.quiz-option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (answered) return;
        answered = true;
        const selectedIdx = parseInt(e.target.getAttribute('data-index'));
        const correctIdx = currentQuestion.answer;
        const feedbackEl = bodyEl.querySelector('#quiz-feedback');
        const nextBtn = bodyEl.querySelector('#quiz-next-btn');

        if (selectedIdx === correctIdx) {
          e.target.classList.add('correct');
          feedbackEl.className = "quiz-feedback show correct-feedback";
          feedbackEl.innerHTML = `<strong>Bagus Sekali!</strong> Jawaban Anda benar.`;
        } else {
          e.target.classList.add('incorrect');
          optionBtns[correctIdx].classList.add('correct');
          feedbackEl.className = "quiz-feedback show incorrect-feedback";
          feedbackEl.innerHTML = `<strong>Belum Tepat.</strong> Petunjuk Evaluasi: ${currentQuestion.explanation}`;
        }

        optionBtns.forEach(b => b.disabled = true);
        nextBtn.style.display = 'block';

        // Render ulang MathJax jika penjelasan mengandung LaTeX
        if (window.MathJax && typeof MathJax.typeset === 'function') {
          MathJax.typeset([feedbackEl]);
        }
      });
    });

    // Event listener tombol soal berikutnya
    bodyEl.querySelector('#quiz-next-btn').addEventListener('click', () => {
      loadNewQuestion();
    });
  }

  // Event listener pengubah Level
  container.querySelectorAll('#level-selectors .ctrl-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      container.querySelectorAll('#level-selectors .ctrl-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentLevel = e.target.getAttribute('data-level');
      loadNewQuestion();
    });
  });

  // Event listener pengubah Tipe Soal (Polos / Cerita)
  container.querySelectorAll('#type-selectors .ctrl-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      container.querySelectorAll('#type-selectors .ctrl-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentType = e.target.getAttribute('data-type');
      loadNewQuestion();
    });
  });

  // Muat soal pertama kali saat pertama kali dibuka
  loadNewQuestion();
};

// Pemanggilan otomatis jika diuji langsung di CodePen / lingkungan lokal
document.addEventListener("DOMContentLoaded", function() {
  initAljabarQuiz('interaktif-aljabar-quiz');
});
