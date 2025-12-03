// Task execution functionality for modules
function setupTaskExecution() {
    const runButtons = document.querySelectorAll('.run-btn');
    
    runButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const taskId = this.getAttribute('data-task');
            const outputElement = document.getElementById(`output${taskId}`);
            
            if (!outputElement) return;
            
            const outputContent = outputElement.querySelector('.output-content');
            
            // Show running state
            this.classList.add('running');
            const originalHTML = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Іске қосылуда...';
            outputElement.classList.add('active');
            outputContent.textContent = 'Бағдарлама іске қосылуда...';
            
            // Simulate execution
            setTimeout(() => {
                this.classList.remove('running');
                this.innerHTML = originalHTML;
                
                // Get input values based on task
                let result = '';
                switch(taskId) {
                    case '1':
                        const num1 = parseInt(document.getElementById('task1-process0')?.value) || 7;
                        const num2 = parseInt(document.getElementById('task1-process1')?.value) || 4;
                        const num3 = parseInt(document.getElementById('task1-process2')?.value) || 11;
                        const num4 = parseInt(document.getElementById('task1-process3')?.value) || 3;
                        
                        result = `0 процесі: ${num1} * 2 = ${num1 * 2}
1 процесі: ${num2} * 2 = ${num2 * 2}
2 процесі: ${num3} * 2 = ${num3 * 2}
3 процесі: ${num4} * 2 = ${num4 * 2}
Процессер саны: 4`;
                        break;
                    case '2':
                        const num = parseFloat(document.getElementById('task2-number')?.value) || 12.5;
                        result = `Бастапқы сан: ${num.toFixed(2)}
Қарама-қарсы мән: ${(-num).toFixed(2)}`;
                        break;
                    case '3':
                        const n1 = parseInt(document.getElementById('task3-process1')?.value) || 12;
                        const n2 = parseInt(document.getElementById('task3-process2')?.value) || 8;
                        const n3 = parseInt(document.getElementById('task3-process3')?.value) || 15;
                        
                        result = `Бас процесс жұмысты бастады...
1 процесінен хабар қабылданды
2 процесінен хабар қабылданды
3 процесінен хабар қабылданды

Барлық процессерден алынған сандар:
Процесс 1: ${n1}
Процесс 2: ${n2}
Процесс 3: ${n3}`;
                        break;
                    case '4':
                        const n4 = parseInt(document.getElementById('task4-number')?.value) || 42;
                        result = `Бас процесс хабарларды күтуде...
Процесс 3 ${n4} санын жіберуде...
Процесс 3 хабарды сәтті жіберді
Процесс 2 ${n4} санын жіберуде...
Процесс 2 хабарды сәтті жіберді
Процесс 1 ${n4} санын жіберуде...
Процесс 1 хабарды сәтті жіберді
Процесс 3-тен алынған сан: ${n4}
Процесс 2-ден алынған сан: ${n4}
Процесс 1-ден алынған сан: ${n4}`;
                    case '5':
                        // MPIBegin30: Bcast single number
                        const n5 = parseInt(document.getElementById('task5-process0').value) || 777;
                        
                        result = `MPI_Begin30: 4 процесс іске қосылды (MPI_Bcast)\n`;
                        result += `================================\n`;
                        result += `Бас процесс (ранг 0) хабарлайды:\n`;
                        result += `Менде бастапқы сан бар: ${n5}\n`;
                        result += `Барлық процесстерге MPI_Bcast арқылы жіберілуде...\n`;
                        result += `================================\n`;
                        result += `Процесс 1 хабарлайды:\n`;
                        result += `MPI_Bcast-тан санды күтуде...\n`;
                        result += `================================\n`;
                        result += `Процесс 2 хабарлайды:\n`;
                        result += `MPI_Bcast-тан санды күтуде...\n`;
                        result += `================================\n`;
                        result += `Процесс 3 хабарлайды:\n`;
                        result += `MPI_Bcast-тан санды күтуде...\n`;
                        result += `================================\n`;
                        result += `Процесс 1 хабарлайды:\n`;
                        result += `MPI_Bcast арқылы сан қабылданды: ${n5}\n`;
                        result += `================================\n`;
                        result += `Процесс 2 хабарлайды:\n`;
                        result += `MPI_Bcast арқылы сан қабылданды: ${n5}\n`;
                        result += `================================\n`;
                        result += `Процесс 3 хабарлайды:\n`;
                        result += `MPI_Bcast арқылы сан қабылданды: ${n5}\n`;
                        result += `================================\n`;
                        result += `Бас процесс (ранг 0) хабарлайды:\n`;
                        result += `MPI_Bcast аяқталды. 4 процесс сан алды\n`;
                        result += `Барлық процесстердегі сан: ${n5}\n`;
                        result += `================================\n`;
                        break;
                        
                    case '6':
                        // MPIBegin31: Bcast array of 5 numbers
                        const arr0 = parseFloat(document.getElementById('task6-arr0').value) || 2.5;
                        const arr1 = parseFloat(document.getElementById('task6-arr1').value) || 6.3;
                        const arr2 = parseFloat(document.getElementById('task6-arr2').value) || 4.7;
                        const arr3 = parseFloat(document.getElementById('task6-arr3').value) || 8.1;
                        const arr4 = parseFloat(document.getElementById('task6-arr4').value) || 3.2;
                        
                        result = `MPI_Begin31: 4 процесс іске қосылды (MPI_Bcast массив)\n`;
                        result += `================================\n`;
                        result += `Бас процесс (ранг 0) хабарлайды:\n`;
                        result += `Менде 5 саннан тұратын жиынтық бар:\n`;
                        result += `  numbers[0] = ${arr0.toFixed(1)}\n`;
                        result += `  numbers[1] = ${arr1.toFixed(1)}\n`;
                        result += `  numbers[2] = ${arr2.toFixed(1)}\n`;
                        result += `  numbers[3] = ${arr3.toFixed(1)}\n`;
                        result += `  numbers[4] = ${arr4.toFixed(1)}\n`;
                        result += `Барлық процесстерге MPI_Bcast арқылы жіберілуде...\n`;
                        result += `================================\n`;
                        result += `Процесс 1 хабарлайды:\n`;
                        result += `MPI_Bcast-тан 5 элементтік массивті күтуде...\n`;
                        result += `================================\n`;
                        result += `Процесс 2 хабарлайды:\n`;
                        result += `MPI_Bcast-тан 5 элементтік массивті күтуде...\n`;
                        result += `================================\n`;
                        result += `Процесс 3 хабарлайды:\n`;
                        result += `MPI_Bcast-тан 5 элементтік массивті күтуде...\n`;
                        result += `================================\n`;
                        result += `Процесс 1 хабарлайды:\n`;
                        result += `MPI_Bcast арқылы 5 элементтік массив қабылданды:\n`;
                        result += `  numbers[0] = ${arr0.toFixed(1)}\n`;
                        result += `  numbers[1] = ${arr1.toFixed(1)}\n`;
                        result += `  numbers[2] = ${arr2.toFixed(1)}\n`;
                        result += `  numbers[3] = ${arr3.toFixed(1)}\n`;
                        result += `  numbers[4] = ${arr4.toFixed(1)}\n`;
                        result += `================================\n`;
                        result += `Процесс 2 хабарлайды:\n`;
                        result += `MPI_Bcast арқылы 5 элементтік массив қабылданды:\n`;
                        result += `  numbers[0] = ${arr0.toFixed(1)}\n`;
                        result += `  numbers[1] = ${arr1.toFixed(1)}\n`;
                        result += `  numbers[2] = ${arr2.toFixed(1)}\n`;
                        result += `  numbers[3] = ${arr3.toFixed(1)}\n`;
                        result += `  numbers[4] = ${arr4.toFixed(1)}\n`;
                        result += `================================\n`;
                        result += `Процесс 3 хабарлайды:\n`;
                        result += `MPI_Bcast арқылы 5 элементтік массив қабылданды:\n`;
                        result += `  numbers[0] = ${arr0.toFixed(1)}\n`;
                        result += `  numbers[1] = ${arr1.toFixed(1)}\n`;
                        result += `  numbers[2] = ${arr2.toFixed(1)}\n`;
                        result += `  numbers[3] = ${arr3.toFixed(1)}\n`;
                        result += `  numbers[4] = ${arr4.toFixed(1)}\n`;
                        result += `================================\n`;
                        result += `Бас процесс (ранг 0) хабарлайды:\n`;
                        result += `MPI_Bcast аяқталды. 4 процесс массив алды\n`;
                        result += `Барлық процесстердегі массив (соңғы тексеру):\n`;
                        result += `  numbers[0] = ${arr0.toFixed(1)}\n`;
                        result += `  numbers[1] = ${arr1.toFixed(1)}\n`;
                        result += `  numbers[2] = ${arr2.toFixed(1)}\n`;
                        result += `  numbers[3] = ${arr3.toFixed(1)}\n`;
                        result += `  numbers[4] = ${arr4.toFixed(1)}\n`;
                        result += `================================\n`;
                        result += `Процесс 0: массивтің 0-индексі = ${arr0.toFixed(1)} (барлық процесс бірдей)\n`;
                        result += `Процесс 1: массивтің 0-индексі = ${arr0.toFixed(1)} (барлық процесс бірдей)\n`;
                        result += `Процесс 2: массивтің 0-индексі = ${arr0.toFixed(1)} (барлық процесс бірдей)\n`;
                        result += `Процесс 3: массивтің 0-индексі = ${arr0.toFixed(1)} (барлық процесс бірдей)\n`;
                        break;
                    default:
                        result = 'Нәтиже: Бағдарлама сәтті орындалды!';
                }
                
                outputContent.textContent = result;
            }, 1500);
        });
    });

    
}

// Update DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    animateStats();
    setupCopyButtons();
    setupTaskExecution();
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown') && window.innerWidth <= 768) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
        
        // Close mobile menu when clicking outside
        if (!e.target.closest('.navbar') && window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').className = 'fas fa-bars';
        }
    });
});