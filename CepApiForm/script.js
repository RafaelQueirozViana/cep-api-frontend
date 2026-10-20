const button = document.getElementById("submit-btn");
const cepInput = document.getElementById("cep-input");
const ruaInput = document.getElementById("rua-input");
const bairroInput = document.getElementById("bairro-input");
const cityInput = document.getElementById("city-input");
const ufInput = document.getElementById("uf-input");

const errorMessage = document.querySelector(".error");

async function FillCepInfo() {
    if (cepInput.value.length == 8) {
        try {
            const cepNumber = cepInput.value;
            const response = await fetch(`https://viacep.com.br/ws/${cepNumber}/json`);
            const information = await response.json();

            console.log(information.erro)

            if (!information.erro) {
                ruaInput.value = information.logradouro;
                bairroInput.value = information.bairro;
                cityInput.value = information.localidade
                ufInput.value = information.uf
                removeError("cep-error")
            }

            else {
                showError("cep-error", "O CEP inserido é inválido!")
            }
            //01001000
        }

        catch (error) {
            console.log("invalid error:" + error)
        }

    }

    else {
        clearCepInputs();
        showError("cep-error", "O CEP precisa ter 8 caractéres")


    }
}


function clearCepInputs() {
    ruaInput.value = "";
    bairroInput.value = "";
    cityInput.value = "";
    ufInput.value = "";
}

function showError(elementId, message) {
    const errorText = document.getElementById(elementId);
    errorText.textContent = message;
    errorText.classList.add("show");

}


function removeError(elementId) {
    const errorText = document.getElementById(elementId);
    errorText.classList.remove("show");

}


cepInput.addEventListener("input", FillCepInfo)