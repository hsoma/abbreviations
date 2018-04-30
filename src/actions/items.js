var items = [
    {
        id: 1,
        pt: "Academic & Science",
        st: "Amateur Radio, Architecture, Biology, Chemistry, Degrees, Electronics, Geology, IEEE, Mathematics, Mechanics, Meteorology, Ocean Science, Physics, Universities"
    },
    {
        id: 2,
        pt: "Community",
        st: "Conferences, Educational, Famous, Film Censorship, Genealogy, Housing, Law, Media, Museums, Music, Non-Profit Organizations, Religion, Schools, Sports, Unions"
    },
    {
        id: 3,
        pt: "Governmental",
        st: "FBI, FDA, Military, NASA, Police, State & Local, Suppliers, Transportation, UN, US Gov."
    },
    {
        id: 4,
        pt: "Miscellaneous",
        st: "Chess, Clothes, Coins, Construction, Days, Farming, Food, Funnies, Gaming, Hobbies, Months, Photography, Plastics, Sci-Fi, Unit Measures, Journal Abbreviations"
    },
    {
        id: 5,
        pt: "Medical",
        st: "British Medicine, Dental, Drugs, Hospitals, Human Genome, Laboratory, Medical Physics, Neurology, Nursing, Oncology, Physiology, Prescription, Veterinary"
    }
]
export const getItems = () => {

    return {
        type: 'get',
        items
    }
}

export const searchKey = (key) => {
    return {
        type: 'search',
        key,
        items
    }
}

export const selectedItem = (id) => {
    return {
        type: 'selectedItem',
        id,
        items
    }
}
