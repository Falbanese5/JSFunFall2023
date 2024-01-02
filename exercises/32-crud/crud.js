!(function () {
  /**
   * You will be using the Dummy Product API. You can find the documentation here:
   * @see https://dummyjson.com/docs/products
   *
   * You will be building a Create Update Read Delete (CRUD) application.
   * You will need to make three AJAX requests using the Dummy Product API.
   *
   * 1. Make an AJAX request to get a list of products.
   *    Display the list of products in the table below.
   *    See the sample table row HTML below.
   *    Each row must have a "Delete" button.
   *
   * 2. When the user clicks on a "Delete" button,
   *    it should make an AJAX request to delete the product.
   *
   * 3. When the user fills out and submits the "Add Product" form,
   *    send an AJAX request to add the new product.
   *
   * You can use Axios if you like to solve this problem. (You will need to get the library from a CDN.)
   * You can choose to use promise or async and await.
   *
   * HINT: You might want to embed the product ID somewhere in the HTML
   * @see https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
   *
   * Sample table row HTML:
   * @example
   * <tr>
   *   <td>1</td>
   *   <td>iPhone 9</td>
   *   <td>An apple mobile which is nothing like apple</td>
   *   <td>$549.00</td>
   *   <td>12.96</td>
   *   <td>4.69</td>
   *   <td>94</td>
   *   <td>Apple</td>
   *   <td>smartphones</td>
   *   <td>
   *     <button class="btn btn-danger btn-sm delete-product-btn">Delete</button>
   *   </td>
   * </tr>
   */

  const addProductBtn = document.querySelector("#addProductBtn");
  const table = document.querySelector("#productTableBody");
  //let data;

  fetch("https://dummyjson.com/products")
  .then((res) => res.json())    
  .then((data) => 
  {
    data.products.forEach((elements) => 
    {
      console.log(elements)
      const html = `<tr data-id="${elements.id}">>
       <td>${elements.id}</td>
       <td>${elements.title}</td>
       <td>${elements.description}</td>
       <td>${elements.price.toFixed(2)}</td>
       <td>${elements.discountPercentage}</td>
       <td>${elements.rating.toFixed(2)}</td>
       <td>${elements.stock}</td>
       <td>${elements.brand}</td>
       <td>${elements.category}</td>
       <td>
          <button class="btn btn-danger btn-sm delete-product-btn">Delete</button>
        </td>
      </tr>`;
      table.innerHTML += html;
    });
    
    const deleteButtons = document.querySelectorAll(".delete-product-btn");
    deleteButtons.forEach((button) =>
    {
      button.addEventListener("click", () => 
      { 
        const id = button.id.replace("row-", "");
        fetch('https://dummyjson.com/products/' + id, 
        {
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(() => 
        {

          const row = document.querySelector(`#elements-${id}`);
          row.remove();
        })
      
      })
    })
  })
 .catch((error) => 
 {
    console.error(error);
 });


})();
