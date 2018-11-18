import Firebase from 'firebase/app'
import 'firebase/database'
import config from './config'
// Иницилизируем firebase app
const app = Firebase.initializeApp(config)
// Экспортируем базу данных
export const db = app.database()
