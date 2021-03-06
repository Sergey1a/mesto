function renderList () {
    const itemList = initialCards.map(composeItem);
    cardsContainer.append(...itemList);
}
// Темплей  =====================
function composeItem (item){
    const newItem = templateElement.content.cloneNode(true);

    newItem.querySelector('.element__like').addEventListener('click', toggleLike);

    const buttonRemove = newItem.querySelector('.element__remove');
      buttonRemove.addEventListener('click',handleDeleteCard);

      titleElement.textContent = item.name;
      cardsImg.src = item.link;
      cardsImg.alt = item.name;
    

   //поп-ап фото  =======================
   cardsImg.addEventListener('click',() => {
    popupOpen(popupImageFull);
    hendlePopupPhoto.src = item.link;
    hendlePopupPhoto.alt = item.name;
    fullFotoTitle.textContent = item.name;
});

    return newItem;
};

renderList();





