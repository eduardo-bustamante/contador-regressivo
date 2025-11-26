        const targetDate = new Date("Dec 19, 2025 17:00:00").getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            // Cálculos de tempo para dias, horas, minutos e segundos
            // 1000ms = 1s, 60s = 1min, 60min = 1h, 24h = 1dia
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Exibir os resultados nos elementos HTML
            document.getElementById("days").innerText = formatTime(days);
            document.getElementById("hours").innerText = formatTime(hours);
            document.getElementById("minutes").innerText = formatTime(minutes);
            document.getElementById("seconds").innerText = formatTime(seconds);

            // Se a contagem terminar
            if (distance < 0) {
                clearInterval(interval);
                document.getElementById("countdown").style.display = "none"; // Esconde o contador
                document.getElementById("message").style.display = "block";  // Mostra a mensagem
            }
        }

        // Função auxiliar para adicionar o zero à esquerda (ex: 09 em vez de 9)
        function formatTime(time) {
            return time < 10 ? `0${time}` : time;
        }

        // Atualiza a cada 1 segundo (1000 milissegundos)
        const interval = setInterval(updateCountdown, 1000);

        // Chama a função imediatamente para não esperar 1 segundo ao carregar
        updateCountdown();
