function hello(name: string, lang: "en" | "it" | "es"): string {
    const greetMap = {
        "en": "Hello",
        "it": "Ciao",
        "es": "Hola"
    }
    const greetingWord = greetMap[lang];

    return `${greetingWord} ${name}!`;
}

console.log(hello("Giovanni", "es"));