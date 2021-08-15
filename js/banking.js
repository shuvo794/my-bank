document.getElementById('Deposite-btn').addEventListener('click', function() {
        // get hendelar
        const depositInput = document.getElementById('Deposite-input');
        const depositeText = depositInput.value;
        const depositeAmount = parseFloat(depositeText);
        // console.log(depositeAmount);
        const depositeCurrent = document.getElementById('depositeTotal');
        const recentText = depositeCurrent.innerText;
        const recentAmount = parseFloat(recentText)

        const newdepostiteTotal = recentAmount + depositeAmount;
        depositeCurrent.innerText = newdepostiteTotal;

        // update Acount balence
        const balenceTotal = document.getElementById('balenceTotal');
        const balenceText = balenceTotal.innerText;
        const previousBalenceTotal = parseFloat(balenceText)
        const newBalenceTotal = previousBalenceTotal + newdepostiteTotal;
        balenceTotal.innerText = newBalenceTotal;
        // cleardeposite inputFrild
        depositInput.value = '';
    })
    // handel withdrow handelar
document.getElementById('widrow-btn').addEventListener('click', function() {
    const withDrowInput = document.getElementById('widrow-input')
    const withDorwText = withDrowInput.value;
    const withDrowAmount = parseFloat(withDorwText)
    console.log(withDrowAmount);
    // set withdrow Total
    const withDrowTotal = document.getElementById('WithDrow-total')
    const withdrowtext = withDrowTotal.innerText;
    const withdrowTotalAmount = parseFloat(withdrowtext);
    const newWithdrowTotal = withdrowTotalAmount + withDrowAmount;
    withDrowTotal.innerText = newWithdrowTotal;

    // clear withDrow
    withDrowInput.value = '';

    // updte Total balence
    const balenceTotal = document.getElementById('balenceTotal')
    const previousBalenceText = balenceTotal.innerText;
    const previoustBalenceTotal = parseFloat(previousBalenceText)
    const newBalenceTotal = previoustBalenceTotal - withDrowAmount;
    balenceTotal.innerText = newBalenceTotal;
})