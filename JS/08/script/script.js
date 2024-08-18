window.onload = () => {
    const SELECTED_CLASSNAME = "selected";

    function getList() {
        return document.querySelector("#list");
    }

    function removeSelected() {
        const selected = getSelected();
        if (selected) {
            selected.classList.remove(SELECTED_CLASSNAME);
        }
    }

    function setSelected(element) {
        if (element) {
            element.classList.add(SELECTED_CLASSNAME);
        }
    }

    function getSelected() {
        return document.querySelector(`.${SELECTED_CLASSNAME}`);
    }

    function getFirstElement() {
        return getList().firstElementChild;
    }

    function getLastElement() {
        return getList().lastElementChild;
    }    

    function createNewChild() {
        const newElement = document.createElement("li");
        newElement.textContent = "List Item NEW";   
        return newElement;  
    }

    document.querySelector("#selectFirstChild").onclick = () => {
        removeSelected();
        setSelected(getFirstElement());
    }

    document.querySelector("#selectLastChild").onclick = () => {
        removeSelected();
        setSelected(getLastElement());
    }

    document.querySelector("#selectNextNode").onclick = () => {
        const selected = getSelected();
        if (selected) {
            if (selected.nextElementSibling) {
                removeSelected();
                setSelected(selected.nextElementSibling);
            }
        } else {
            setSelected(getFirstElement());
        }
    }

    document.querySelector("#selectPrevNode").onclick = () => {
        const selected = getSelected();
        if (selected) {
            if (selected.previousElementSibling) {
                removeSelected();
                setSelected(selected.previousElementSibling);
            }
        } else {
            setSelected(getLastElement());
        }        
    }

    document.querySelector("#createNewFirstChild").onclick = () => {       
        getList().prepend(createNewChild());
    }

    document.querySelector("#createNewLastChild").onclick = () => {
        getList().append(createNewChild());
    }

    document.querySelector("#removeFirstChild").onclick = () => {
        const firstChild = getFirstElement();
        if (firstChild) {
            firstChild.remove();
        }
    }

    document.querySelector("#removeLastChild").onclick = () => {
        const lastChild = getLastElement();
        if (lastChild) {
            lastChild.remove();
        }        
    }

    // TASK 2
    document.querySelector("#swap").onclick = () => {
        const input1 = document.querySelector("#input1");
        const input2 = document.querySelector("#input2");
        const save = input1.value;
        input1.value = input2.value;
        input2.value = save;
    }    
}