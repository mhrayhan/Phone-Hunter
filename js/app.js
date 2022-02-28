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
    // console.log(brandName);

    //Show how many result Found
    const qtyText = document.getElementById('qty-text');
    if(brandName.length <= 0){
        qtyText.innerText = 'No Result Found';
        qtyText.style.color = 'red';
        return;
    }else {
        qtyText.innerText = `${brandName.length} Result Found`;
        qtyText.style.color = '#000';
    }

    document.getElementById('showAll-btn').style.display = 'block';

    const displayPhone = document.getElementById('display-phone');
    displayPhone.textContent = ''; //clear previous search result.
    brandName.slice(0, 20).forEach(phone => {
        // console.log(phone);
        
        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.innerHTML = `
        <div data-bs-toggle="modal" data-bs-target="#phoneDetails"  onclick="getApiById('${phone.slug}')" class="card p-3 border-0 shadow rounded">
            <img src="${phone.image}" class="card-img-top">
            <div class="card-body ">
                <h5 class="card-title">Brand: ${phone.brand}</h5>
                <h6 class="card-title">Name: ${phone.phone_name}</h6>
                <button type="button" class="btn btn-primary">Phone Details</button>
            </div>
        </div>
        `
        displayPhone.appendChild(div);
    })
}

// Get API By phone id
const getApiById = phoneId => {
    // console.log(phoneId);
    fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data.data));
}
// Display Phone Details
const displayPhoneDetails = phone => {
    console.log(phone.mainFeatures);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card p-3 border-0 shadow rounded">
        <img src="${phone.mainFeatures.image}" class="card-img-top">
        <div class="card-body ">
            <h5 class="card-title">Brand: ${phone.brand}</h5>
            <h6 class="card-title">Name: ${phone.phone_name}</h6>
            <button type="button" class="btn btn-primary">Phone Details</button>
        </div>
    </div>
    `
    phoneDetails.appendChild(div);
}