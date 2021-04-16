
export class Section{
    constructor({data,renderer},cardsContainer){
        this._data = data;
        this._renderer = renderer;
        this._container = cardsContainer;
    }

    clear() {
        this._container.innerHTML = '';
      }

    addItem(cardElement){
        this._container.prepend(cardElement)
    }

    renderItems = () =>{
        this.clear();

        this._data.forEach((item) => {
            this._renderer(item);
        });

    }
}