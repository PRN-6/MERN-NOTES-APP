

export const getAllNotes = (req , res) => {
    res.status(200).send("You just fetched the notes")
}

export const createNote =  (req , res) => {
    res.status(201).json({messsage: "note created"})    
}

export const updateNote = (req , res) => {
    res.statues(200).json({message: "note updated"})
}

export const deleteNote = (req , res) => {
    res.status(200).json({message: "note deleted"})
}