
const multiplyValue = (value : number, multiplier?: number ) => {

            if (multiplier == undefined ) {
                return value * 2;
            }

            return value * multiplier;
}

function processInput ( value: string | number | boolean) : string | number  {
        if ( typeof value == "string" ) {
        return value.trim().toLowerCase()
        }
        if (  typeof value == "number") {
            return value * 10;
        }
        if ( typeof value == "boolean"){
            return value ? "Active" : "Inactive"
        }

    return value; 

}

function formatCoordinate ( coordinate: readonly [number, number, string] ):string {
            const [latitude, longitude, locationName] = coordinate;
            return `"location: ${locationName} ( ${latitude}, ${longitude})"`
} 

function concatenateArrays <T> (...arrays: T[][]): T[] {
        return arrays.flat();
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

function getPopularCourses(
    courses: Course[],
    minStudents: number
): Course[] {

    return courses.filter((course) => {
        return course.isPublished === true &&
               course.students >= minStudents;
    });
}


const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

function pluckValues < T, k extends keyof T > ( items: T[], kay: k ): T[k] [] {
    return items.map((item) => item[kay])
}


class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number,  department: string) {
        super(name,baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const manager = new Manager("Alice", 50000, "Engineering");


function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
}















