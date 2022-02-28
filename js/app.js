// Get API By Search Text

const searchPhone = () => {
    const searchInput = document.getElementById('search-input').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInput}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data));
}

// Display Search Result
const displayPhone = brandName => {
    console.log(brandName);
    const displayPhone = document.getElementById('display-phone');
    brandName.forEach(phone => {
        // console.log(phone.brand);
        const div = document.createElement('div');
        div.classList.add('col-4','border-0','shadow');
        div.innerHTML = `
        <div class="card p-2">
            <img src="${phone.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">Brand: ${phone.brand}</h5>
                <h6 class="card-title">Name: ${phone.phone_name}</h6>
                <button type="button" class="btn btn-primary">Phone Details</button>
            </div>
        </div>
        `
        displayPhone.appendChild(div);
    })
}
