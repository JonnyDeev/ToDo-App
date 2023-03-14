import User from '../Models/User.js'

export const register = async (req, res) => {
  try {
    const { username, email, password} = req.body

    const newUser = new User
    
  } catch (error) {
    console.error(error)
  }
}