


const filterContent = [{
    image: './images/images/car-1.jpg',
    about: 'Lorem, ipsum dolor ..',
    tag: 'Nature',
    category: 'cars'

},
{
    image: './images/images/people-2.jpg',
    about: 'Lorem, ipsum dolor ..',
    tag: 'Man',
    category: 'people'

},
{
    image: './images/images/nature-1.jpg',
    about: 'Lorem, ipsum dolor ..',
    tag: 'Nature',
    category: 'nature'

},
{
    image: './images/images/car-2.jpg',
    about: 'Lorem, ipsum dolor ..',
    tag: 'Cars',
    category: 'cars'

},
{
    image: './images/images/car-3.jpg',
    about: 'Lorem, ipsum dolor ..',
    tag: 'cars',
    category: 'cars'

},

{
    image: './images/images/nature-3.jpg',
    about: 'Lorem, ipsum dolor ..',
    tag: 'Nature',
    category: 'nature'

},

{
    image: './images/images/nature-2.jpg',
    about: 'Lorem, ipsum dolor ..',
    tag: 'light',
    category: 'nature'

},

{
    image: './images/images/people-1.jpg',
    about: 'Lorem, ipsum dolor ..',
    tag: 'Man',
    category: 'people'

},

]

const show =()=>{
    const images = filterContent.map((item, index)=>{
        return`
        <div key="${index}" class="filt">
        <img src=" ${item.image}" alt="" />
        <p><b>${item.tag}</b></p>
        <p>${item.about}</p>
      </div>

        `
    })
    document.querySelector('.filter-content').innerHTML = images.join(' ')
}

show()

const genImages = (str)=>{

    if(str == 'all'){
        const images = filterContent.map((item, index)=>{
            return`
            <div key="${index}" class="filt">
            <img src=" ${item.image}" alt="" />
            <p><b>${item.tag}</b></p>
            <p>${item.about}</p>
          </div>

            `
        })

        document.querySelector('.filter-content').innerHTML = images.join(' ')
    }else{

        const images = filterContent.filter((item, index)=> item.category == str )
        const result = images.map((item, index)=> {
            return `
            
            <div key="${index}" class="filt">
            <img src=" ${item.image}" alt="" />
            <p><b>${item.tag}</b></p>
            <p>${item.about}</p>
          </div>
            `
        })

        document.querySelector('.filter-content').innerHTML = result.join(' ')
    }

}
