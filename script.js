
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

/* Sintaks kuis */
window.initAljabarQuiz = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Database Soal Diperkaya: Banyak Variasi & Tidak Berulang
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
        },
        {
          question: "Berapakah banyak suku pada bentuk aljabar \\(2x + 3y - 5\\)?",
          options: ["1", "2", "3", "4"],
          answer: 2,
          explanation: "Suku adalah bagian dari bentuk aljabar yang dipisahkan oleh tanda penjumlahan atau pengurangan, yaitu \\(2x\\), \\(3y\\), dan \\(-5\\) (total ada 3 suku)."
        },
        {
          question: "Pada bentuk aljabar \\(-8p + 9\\), manakah yang merupakan konstanta?",
          options: ["-8", "p", "9", "-9"],
          answer: 2,
          explanation: "Konstanta adalah suku yang tidak memuat variabel dan nilainya tetap, yaitu \\(9\\)."
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
        },
        {
          question: "Ibu membeli \\(p\\) kg jeruk. Ternyata \\(2\\) kg dari jeruk tersebut busuk dan dibuang. Sisa jeruk ibu yang masih baik adalah...",
          options: ["2p", "p - 2", "p + 2", "2 - p"],
          answer: 1,
          explanation: "Kata 'dibuang' atau 'dikurangi' menyatakan operasi pengurangan, sehingga ditulis \\(p - 2\\)."
        },
        {
          question: "Sebuah pita memiliki panjang \\(m\\) meter. Pita tersebut dipotong menjadi \\(3\\) bagian sama panjang. Panjang setiap bagian pita adalah...",
          options: ["m - 3", "3m", "\\(\\frac{m}{3}\\)", "m + 3"],
          answer: 2,
          explanation: "Pita yang dibagi rata menjadi beberapa bagian dinyatakan dalam bentuk pecahan pembagian, yaitu \\(\\frac{m}{3}\\)."
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
        },
        {
          question: "Sederhanakan bentuk aljabar berikut: \\(3x + 5x - 2x\\).",
          options: ["6x", "8x", "10x", "5x"],
          answer: 0,
          explanation: "Jumlahkan koefisien suku-suku sejenis: \\(3 + 5 - 2 = 6\\), sehingga hasilnya \\(6x\\)."
        },
        {
          question: "Hasil penjabaran dari bentuk aljabar \\(2(x + 4)\\) adalah...",
          options: ["2x + 4", "2x + 8", "x + 8", "2x - 8"],
          answer: 1,
          explanation: "Gunakan sifat distributif: \\(2 \\times x + 2 \\times 4 = 2x + 8\\)."
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
        },
        {
          question: "Pak Andi memiliki sebidang tanah berbentuk persegi panjang. Panjangnya \\(3\\) meter lebihnya dari lebarnya \\(l\\). Bentuk aljabar untuk panjang tanah tersebut adalah...",
          options: ["3l", "l - 3", "l + 3", "3 - l"],
          answer: 2,
          explanation: "Frasa '3 meter lebihnya dari lebar \\(l\\)' berarti lebar ditambah 3, yaitu \\(l + 3\\)."
        },
        {
          question: "Dalam sebuah keranjang terdapat \\(a\\) buah apel dan jumlah mangga dua kali lipat dari jumlah apel dikurangi 4. Bentuk aljabar buah mangga adalah...",
          options: ["2a + 4", "2a - 4", "a - 4", "4 - 2a"],
          answer: 1,
          explanation: "Dua kali lipat apel adalah \\(2a\\), lalu dikurangi 4 menjadi \\(2a - 4\\)."
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
        },
        {
          question: "Bentuk sederhana dari \\(5x - 2y - 3x + 4y\\) adalah...",
          options: ["2x + 2y", "8x + 2y", "2x - 6y", "8x - 6y"],
          answer: 0,
          explanation: "Gabungkan suku sejenis: \\((5x - 3x) + (-2y + 4y) = 2x + 2y\\)."
        },
        {
          question: "Jika \\(a = -2\\) dan \\(b = 3\\), hitunglah nilai dari \\(3a^2 - 2ab\\).",
          options: ["6", "18", "24", "0"],
          answer: 2,
          explanation: "Substitusi: \\(3(-2)^2 - 2(-2)(3) = 3(4) - (-12) = 12 + 12 = 24\\)."
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
          question: "Uang tabungan Siska adalah \\(m\\) rupiah. Ia mengambil uangnya sebesar Rp10.000, lalu sisanya dibagi rata ke dalam \\(2\\) amplop. Bentuk aljabar untuk isi satu amplop adalah...",
          options: ["\\(\\frac{m - 10000}{2}\\)", "\\(\\frac{m}{2} - 10000\\)", "\\(2m - 10000\\)", "\\(\\frac{m}{2} + 5000\\)"],
          answer: 0,
          explanation: "Tabungan dikurangi Rp10.000 menjadi \\((m - 10000)\\), lalu dibagi dua menjadi \\(\\frac{m - 10000}{2}\\)."
        },
        {
          question: "Sebuah kebun berbentuk persegi panjang memiliki panjang \\((2x + 3)\\) meter dan lebar \\(x\\) meter. Bentuk aljabar keliling kebun tersebut adalah...",
          options: ["3x + 3", "6x + 6", "4x + 3", "2x + 3"],
          answer: 1,
          explanation: "Rumus keliling \\( = 2(p + l) = 2((2x + 3) + x) = 2(3x + 3) = 6x + 6\\)."
        },
        {
          question: "Umur seorang ayah \\(3\\) kali umur anaknya. Jika selisih umur mereka adalah \\(24\\) tahun, dan umur anak dimisalkan \\(x\\), persamaan aljabar yang tepat untuk menyatakan selisih umur mereka adalah...",
          options: ["3x = 24", "3x - x = 24", "x + 3x = 24", "3(x - 24) = x"],
          answer: 1,
          explanation: "Umur ayah adalah \\(3x\\) dan umur anak adalah \\(x\\). Selisihnya adalah \\(3x - x = 24\\)."
        }
      ]
    }
  };

  let currentLevel = 'mudah';
  let currentType = 'polos';
  let currentQuestion = null;
  let answered = false;
  let lastQuestionIndex = -1; // Variabel pelacak untuk mencegah soal berulang langsung

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
    let randomIndex;
    
    // Pastikan soal berikutnya tidak sama dengan soal yang baru saja tampil (jika jumlah soal > 1)
    if (pool.length > 1) {
      do {
        randomIndex = Math.floor(Math.random() * pool.length);
      } while (randomIndex === lastQuestionIndex);
    } else {
      randomIndex = 0;
    }
    
    lastQuestionIndex = randomIndex;
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
      lastQuestionIndex = -1; // Reset pelacak saat ganti level
      loadNewQuestion();
    });
  });

  // Event listener pengubah Tipe Soal (Polos / Cerita)
  container.querySelectorAll('#type-selectors .ctrl-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      container.querySelectorAll('#type-selectors .ctrl-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentType = e.target.getAttribute('data-type');
      lastQuestionIndex = -1; // Reset pelacak saat ganti tipe
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
