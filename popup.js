document.addEventListener('DOMContentLoaded', function () {
    const linkWalletButton = document.getElementById('linkWalletButton');
    linkWalletButton.addEventListener('click', function () {
        fetch('http://localhost:3000/link-wallet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            chrome.runtime.sendMessage({ action: 'linkWallet', data: data }, function (response) {
                console.log(response.status);
            });
            // Open the external website in a new tab
            chrome.tabs.create({ url: data.externalUrl });
        })
        .catch((error) => {
            console.error('Error:', error.message, error.stack);
        });
    });
});