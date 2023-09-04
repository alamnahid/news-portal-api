const loadData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    const categoris = data.data.news_category;
    // console.log(categoris)
    displayCatagories(categoris);
}

const displayCatagories = datas=>{
    
    const categoriesSection = document.getElementById('catefories-section');
    
    // datas.slice(0, 3).forEach(data=>{
    datas.forEach(data=>{
        const div = document.createElement('div');
        div.classList = `lg:mt-8 flex flex-wrap flex-row`;
        div.innerHTML=`
        <button onclick="handleloadDatacategoriesWise('${data.category_id}')" class="text-[#858585] capitalize roboto lg:text-lg  hover:bg-[#EEEFFF] hover:text-[#5D5FEF] hover:px-3 hover:py-2 hover:rounded-md">${data.category_name}</button>
        `;
        
        categoriesSection.appendChild(div);
    })

}

loadData()

//********************************************************************** */

// categories wise show the neses 

const handleloadDatacategoriesWise = async(id) =>{

    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
    const data = await res.json();
    const categoris = data.data;
    displayCatagorieswisenews(categoris)
}


const displayCatagorieswisenews = datas=>{
    
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML='';
    const defaultSection = document.getElementById('default-section');
    defaultSection.innerHTML=''
    datas.forEach(data=>{
        console.log(data)
        const div = document.createElement('div');
        div.classList = `flex flex-col lg:flex-row gap-9 p-5 bg-white rounded-lg`;
        div.innerHTML=`
        <img class="w-[15.25rem]" src="${data.thumbnail_url}" alt="">
        <div class="py-5 bg-white">
            <h1 class="self-stretch bg-white text-[#121221] text-2xl font-semibold">${data.title}</h1>
            <p class="mt-2 bg-white text-[#949494] roboto text-base pr-6">
                ${data.details}
            </p>

            <div class="flex justify-between items-center mt-6 bg-white">
                <div class="flex gap-2 items-center bg-white">
                    <img class="bg-white w-[38px] h-[38px] rounded-[50%] border-2 border-gray-300" src="${data.author?.img}" alt="">
                    <div class="bg-white">
                        <p class="text-[#2B2C34] bg-white roboto text-base">${data.author?.name}</p>
                    <p class="text-[#718797] bg-white roboto text-sm">${data.author?.published_date}</p>
                    </div>
                </div>

                <div class="flex gap-2 bg-white">
                    <img class="bg-white" src="./eye.svg" alt="">
                    <p class="text-[#515151] bg-white roboto text-lg font-semibold">${data.total_view}</p>
                </div>

                <div class="hidden lg:block">
                                <div class="flex gap-2 bg-white ">
                                    <img class="bg-white" src="./rating1.svg" alt="">
                                    <img class="bg-white" src="./rating2.svg" alt="">
                                    <img class="bg-white" src="./rating2.svg" alt="">
                                    <img class="bg-white" src="./rating2.svg" alt="">
                                    <img class="bg-white" src="./rating2.svg" alt="">
                                </div>
                            </div>

                <div class="bg-white">
                    <img  src="./arrow.svg" alt="">
                </div>
            </div>
        </div>
        `;

        cardContainer.appendChild(div);
    })

}

// loadData()