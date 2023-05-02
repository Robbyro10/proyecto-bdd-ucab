import * as bcrypt from "bcrypt";
interface SeedTodo {
    description: string;
    title: string;
}

interface SeedUser {
    email: string;
    fullName: string;
    password: string;
    roles: string[];
}

interface SeedData {
    todos: SeedTodo[];
    users: SeedUser[];
}


export const initialData: SeedData = {
    users: [
        {
            email: 'test1@gmail.com',
            fullName: 'Test One',
            password: bcrypt.hashSync('Abc123', 10),
            roles: ['admin']
        },
        {
            email: 'jgh2748@gmail.com',
            fullName: 'Juan Hedderich',
            password: bcrypt.hashSync('123456', 10),
            roles: ['admin']
        },
    ],
    
    todos: [
        {
            title: "Tarea de Calculo",
            description: "Realizar los 10 ejercicios que mandaron en la guia sobre derivadas e integrales"
        },
        {
            title: "Estudiar Quimica",
            description: "Leer el libro de quimica organica y repasar las ultimas clases de este mes"
        },
        {
            title: "Ir al Gimnasio",
            description: "Media hora de cardio y media hora de brazos"
        },
        {
            title: "Visitar a la abuela",
            description: "Hoy en la tarde pasar por casa de la abuela y almorzar con la familia"
        },
        {
            title: "Practica de Guitarra",
            description: "5 minutos de escalas, 20 minutos de improvisacion y 30 minutos aprendiendo una nueva cancion"
        },
    ]
}