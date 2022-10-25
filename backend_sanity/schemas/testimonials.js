export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields:[
        {name: 'name',
        title: 'Name',
        type: 'string'
    },
    {
        name: 'company',
        title: 'Company',
        type: 'string'
    },
    {
        name: 'imageurl',
        title: 'imgURL',
        type: 'image',
        options:{
            hotspot: true,
        }
    },
    {   name: 'feeback',
        title: 'Feed',
        type: 'string'

}
    ]
}