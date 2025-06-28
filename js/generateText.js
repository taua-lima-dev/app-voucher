function generateText() {

    const name = document.getElementById('name').value.trim();
    const booking = document.getElementById('booking').value.trim();
    const guests = document.getElementById('guests').value.trim();
    const email = document.getElementById('email').value.trim(); // IMPLEMENTAR
    const tel = document.getElementById('tel').value.trim(); // IMPLEMENTAR
    const total = document.getElementById('total').value.trim();
    const advance = document.getElementById('advance').value.trim();
    const pending = document.getElementById('pending').value.trim();
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const select = document.getElementById('select').value;
    const seller = document.getElementById('seller').value.trim();

    const splitCheckin = checkin.split('-');
    const formatCheckin = `${splitCheckin[2]}/${splitCheckin[1]}/${splitCheckin[0]}`;

    const splitCheckout = checkout.split('-');
    const formatCheckout = `${splitCheckout[2]}/${splitCheckout[1]}/${splitCheckout[0]}`;
    

    
    if (!name) {
        alert("Por favor, preencha todos os campos antes de gerar o texto."); //|| !booking || !guests || !total || !advance || !pending || !checkin || !checkout || !seller || !select
        return;
    }

    // Texto padrão com placeholders
    const textResult =

        `VOUCHER DE CONFIRMAÇÃO RESERVA Nº ${booking}
        
        Titular da reserva: ${name}
        Número de pessoas: ${guests}
        Tipo de acomodação: ${select}
        Valor total do pacote: R$ ${total}
        Valor do adiantamento: R$ ${advance} (CONFIRMADO)
        Saldo pendente a ser pago no check-in: R$ ${pending}
        Data do check-in: ${formatCheckin}ㅤㅤData do check-out: ${formatCheckout}
        
        Condições Gerais:

        1. Não cobramos taxa de serviço, exceto pelo restaurante ou consumos do frigobar (10%);

        2. Incluído na diária café da manhã servido em nosso restaurante das 07h30min às 10h, serviço de governança com enxoval, estacionamento, cadeiras de praia e guarda-sol fornecidos na recepção;

        3. Não é permitida a permanência de animais de estimação na pousada. Consulte nossa equipe para hospedagem de seu amiguinho;

        4. No caso de não comparecimento na data de entrada, haverá cobrança da primeira diária;

        5. Alteração na data da hospedagem deverá ser solicitada até 15 dias antes da data prevista para entrada na pousada. As solicitações dentro deste prazo serão admitidas após avaliação da gerência;

        6. Pacotes de hospedagem serão cobrados integralmente. Não haverá redução ou devolução de valores no caso de saída antecipada;

        7. Cancelamento de reserva deverá ocorrer formalmente no prazo de até 30 dias antes da data prevista para entrada na pousada. Serão descontados 30% sobre o valor depositado para compensação de despesas operacionais e o saldo permanecerá como crédito para hospedagem no prazo de 06 meses à partir da data de cancelamento da reserva;

        8. Em caso de cancelamento de reserva com prazo inferior a 30 dias antes da data prevista para entrada na pousada e as reservas efetuadas dentro desse período, o valor depositado não será devolvido, sendo descontado 70% sobre o valor depositado em caráter de multa contratual e o saldo permanece como crédito para hospedagem no prazo de 06 meses a partir da data do cancelamento da reserva;

        Qualquer alteração na reserva, dúvidas ou outras informações, por favor, entre em contato.
        Desde já desejamos uma boa viagem!
        Atenciosamente, ${seller}.
        `;

    // Exibir o texto gerado
    document.getElementById('text').innerText = textResult;
}

export default generateText;