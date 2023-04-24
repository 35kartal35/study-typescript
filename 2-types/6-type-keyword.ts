/**
 * Typescript bize tür oluşturma imkanı verir.
 * bu işlemi yapabilmek için type, interface, class keywordlerini kullanabiliriz.
 * her keywordün kendine ait özellikleri vardır.
 */

/**
 * yeni bir type (tür) tanımlarken bazı kurallar vardır:
 * -Type'ların ismi Pascal case olmalı
 * -type ların sonuna "Type" eklenirse daha anlamlı olur.
 */

type User = {
    id: number,
    firstname: string,
    lastname: string
    //
};

/**
 * değişken tanımlayıp bunu değer ataması yapılırken kullanılan kurallar:
 *  - Değişken isimleri snake case veya camel case olmalı. (Camel case olursa daha iyi olur).
 */

const has = {
    id: 1,
    firstname: "ahmet",
    lastname: "hakan",
    //
};

// yukarıda oluşturduğumuz "user" türünü kullanalım.

const user_1: User = {
    id: 1,
    firstname: "ramazan",
    lastname: "özbuğanlı",
}

const user_2: User = {
    id: 2,
    firstname: "furkan",
    lastname: "güneş",
};

const user_3: User = {
    firstname: "mehmet",
    lastname: "özdemir",
    id: 3
};

const user_4: User = {
    firstname: "Ömer Said",
    id: 4,
    lastname: "özdemir",
}


type Student = {

    firstname: string,
    lastname: string,
    no: number,
};

const student_1: Student = {
    firstname: "Devrim",
    lastname: "tarhan",
    no: 43


};

const student_2: Student = {
    firstname: "yusuf",
    lastname: "kenan",
    no: 34
};

const student_3: Student = {
    firstname: "Mehmet",
    lastname: "Çimen",
    no: 35
};





type vosvos = {
    model: number,
    nickname: string,
    birth: Date,
};

const vosvos_1: vosvos = {
    birth: new Date(1987 - 9 - 12),
    model: 1987,
    nickname: "halo"
};

type Lesson = {
    id: number,
    name: string,
    content: string,
    total_session: number,
    teacher: User,
};

type UdemigClass = {
    name: string;
    student: User[];
    teacher: User[];
    current_teacher: User;
    seazon: number;
    lessons: Lesson[],
    is_requared: boolean;
}
