        function copyArticleLink() {
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                const button = document.querySelector('.copy-link');
                const originalHTML = button.innerHTML;
                button.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                    </svg>
                    Copied!
                `;
                button.style.background = '#34c759';
                button.style.borderColor = '#34c759';
                
                setTimeout(() => {
                    button.innerHTML = originalHTML;
                    button.style.background = '';
                    button.style.borderColor = '';
                }, 2000);
            });
        }

        function saveArticle() {
            window.print();
        }

        const printStyles = document.createElement('style');
        printStyles.textContent = `
            @media print {
                /* Hide navigation and other non-content elements */
                .navbar, .article-navigation, .article-actions,
                .article-share, .related-articles, footer {
                    display: none !important;
                }
                
                /* Show only the article content */
                body {
                    background: white !important;
                    color: black !important;
                }
                
                .article-content {
                    max-width: none !important;
                    padding: 0 !important;
                }
                
                .full-article {
                    box-shadow: none !important;
                    border: none !important;
                    background: white !important;
                }
                
                /* Ensure images print properly */
                img {
                    max-width: 100% !important;
                    page-break-inside: avoid;
                }
                
                /* Make text readable */
                h1, h2, h3, h4, p, li {
                    color: black !important;
                }
                
                /* Hide interactive elements */
                .share-buttons, .read-more-btn, .btn-arrow {
                    display: none !important;
                }
            }
        `;
        document.head.appendChild(printStyles);