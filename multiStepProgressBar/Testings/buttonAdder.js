class internalUI{

    addElement(){
        console.log('Adding element...');
        container.innerHTML+= elementAddition
    }
    
    removeElement(){
        console.log('Removing element...');
        container.removeChild(container.lastElementChild)
    }

    clearElements(){
        console.log('Clearing elements...');
        container.innerHTML='<p>Container Cleared</p>';
    }

    elementSelection(e){
        console.log('Selecting element...'+ e.target.value);
        if(e.target.value === 'button'){
            elementAddition= elementadditionBtn;
            divProperties.innerHTML= btnProperties;}
        else if(e.target.value === 'input'){
            elementAddition= elementadditionInput;}
        else if(e.target.value === 'select'){
            elementAddition= elementadditionSelect;}
        else if(e.target.value === 'textarea'){
            elementAddition= elementadditionTextArea;}
        else if(e.target.value === 'div'){
            elementAddition= elementadditionDiv;}
    }

    


}

//* This is the main file that will be used to add, remove and clear elements from the container.

let addBtn= document.querySelector('#add');
let removeBtn= document.querySelector('#remove');
let clearBtn= document.querySelector('#clear');
let selectorElement= document.querySelector('#elementSelector');
let container= document.querySelector('#container');

//This will be used to add elements to the container. temporary
let elementadditionBtn= `<button class="elements_Button">Button</buttton>`;
let elementadditionInput= `<input type="text" class="elements_input" placeholder="Input here">`;
let elementadditionSelect= `<select class="elements_Select"><option value="1">Option 1</option><option value="2">Option 2</option></select>`;
let elementadditionTextArea= `<textarea class="elements_TextArea"></textarea>`;
let elementadditionDiv= `<div class="elements_Div">Div exist here Ill fw this later</div>`;

//This stores the currebt elemetns that will be added to the container.
let elementAddition= elementadditionBtn;

//this class holds all funtunalities of all the buttons except the selector element.
let obj= new internalUI();

//This is the properties container

let divProperties= document.querySelector('#propertyContainer');

//This will manage properties of the elements that will be added to the container.
let btnProperties=`<div>
            <input type="range" class="propertiesWidgets" id="roundedCornersWidget" min="0" max="100" value="0" step="1">
            <label for="roundedCornersWidget" class="propertiesLabel">Rounded Corners
                <input type="number" value="0" class= "propertiesLabelInputs" id="roundedCornersWidgetLabel">
            </label>
            </div>

            <div>
            <input type="text" class="propertiesWidgets" id="buttonTextWidget" value="Button">
            <label for="buttonTextWidget" class="propertiesLabel">Button Text</label>
            </div>

            <div>
            <input type="color" class="propertiesWidgets" id="buttonColorWidget" value="#000000">
            <label for="buttonColorWidget" class="propertiesLabel">Button Color
                <select id="buttonColorSelect" class="propertiesLabelInputs">
                    <option value="rgb(0,0,0)">Black</option>
                    <option value="rgb(255,0,0)">Red</option>
                    <option value="rgb(0,255,0)">Green</option>
                    <option value="rgb(0,0,255)">Blue</option>
                    <option value="rgb(255,255,0)">Yellow</option>
                    <option value="rgb(255,0,255)">Magenta</option>
                    <option value="rgb(0,255,255)">Cyan</option>
                    <option value="rgb(255,255,255)">White</option>
                    <option value="rgb(128,128,128)">Gray</option>
                    <option value="rgb(128,0,0)">Maroon</option>
                    <option value="rgb(128,128,0)">Olive</option>
                    <option value="rgb(0,128,0)">Dark Green</option>
                    <option value="rgb(0,0,128)">Navy</option>
                    <option value="rgb(128,0,128)">Purple</option>
                    <option value="rgb(0,128,128)">Teal</option>
                    <option value="rgb(192,192,192)">Silver</option>
                    <option value="rgb(255,165,0)">Orange</option>
                    <option value="rgb(255,192,203)">Pink</option>
                    <option value="rgb(255,255,255)">White</option>
                </select>
            </label>
            </div>

            <div>
            <input type="range" class="propertiesWidgets" id="buttonWidthWidget" min="0" max="100" value="0" step="1">
            <label for="buttonSizeWidget" class="propertiesLabel">Button Size
                <input type="number" value="0" class= "propertiesLabelInputs" id="buttonSizeWidgetLabel"> 
            </label>
            </div>
            
            <div>
            <input type="range" class="propertiesWidgets" id="buttonHeightWidget" min="0" max="100" value="0" step="1">
            <label for="buttonHeightWidget" class="propertiesLabel">Button Height
                <input type="number" value="0" class= "propertiesLabelInputs" id="buttonHeightWidgetLabel">
            </label>
            </div>`

//event addition to the buttons.

addBtn.addEventListener('click', obj.addElement);
removeBtn.addEventListener('click', obj.removeElement);
clearBtn.addEventListener('click', obj.clearElements);
selectorElement.addEventListener('change', obj.elementSelection);
