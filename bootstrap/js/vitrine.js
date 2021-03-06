var vitrineBone = document.querySelector("#vitrine-bone");
var vitrineCarteira = document.querySelector("#vitrine-carteiras");
var vitrineCamisas = document.querySelector("#vitrine-camisas");


//Seleção da Nav
var navBone = document.querySelector("#nav0");
var navCarteiras = document.querySelector("#nav1");
var navCamisas = document.querySelector("#nav2");

vitrineBone.classList.remove("abaOff");
vitrineCarteira.classList.add("abaOff");
vitrineCamisas.classList.add("abaOff");

navBone.addEventListener("click",function(){
	vitrineBone.classList.remove("abaOff");
	vitrineCarteira.classList.add("abaOff");
	vitrineCamisas.classList.add("abaOff");
}) 

navCarteiras.addEventListener("click",function(){
	vitrineBone.classList.add("abaOff");
	vitrineCamisas.classList.add("abaOff");
	vitrineCarteira.classList.remove("abaOff");
}) 

navCamisas.addEventListener("click",function(){
	vitrineBone.classList.add("abaOff");
	vitrineCarteira.classList.add("abaOff");
	vitrineCamisas.classList.remove("abaOff");
}) 



//Selecões dos Botões
var botaoBone = document.querySelector("#Aba0");
var botaoCarteiras = document.querySelector("#Aba1");
var botaoCamisas = document.querySelector("#Aba2");

vitrineBone.classList.remove("abaOff");
vitrineCarteira.classList.add("abaOff");
vitrineCamisas.classList.add("abaOff");

botaoBone.addEventListener("click",function(){
	vitrineBone.classList.remove("abaOff");
	vitrineCarteira.classList.add("abaOff");
	vitrineCamisas.classList.add("abaOff");
}) 

botaoCarteiras.addEventListener("click",function(){
	vitrineBone.classList.add("abaOff");
	vitrineCamisas.classList.add("abaOff");
	vitrineCarteira.classList.remove("abaOff");
}) 

botaoCamisas.addEventListener("click",function(){
	vitrineBone.classList.add("abaOff");
	vitrineCarteira.classList.add("abaOff");
	vitrineCamisas.classList.remove("abaOff");
}) 

