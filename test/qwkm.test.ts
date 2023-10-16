import { qwkm } from "../src/gode"

describe("qwkm: QWERTY-Kedmanee Swtiching", () => {
    test("this should return รักคือฝันไป", () => {
        expect(qwkm("iyd8nv/yowx")).toBe("รักคือฝันไป")
    })

    test("this should return the brown fox jumps over the lazy dog", () => {
        expect(qwkm("ะ้ำ ิพนไื ดนป ่ีทยห นอำพ ะ้ำ สฟผั กนเ")).toBe("the brown fox jumps over the lazy dog")
    })

    test("this should return someone@example.com", () => {
        expect(qwkm("หนทำนืำ๑ำปฟทยสำใแนท")).toBe("someone@example.com")
    })

    test("this should return เมื่อไหร่ประเทศไทยจะมี Taylor Swift สักที", () => {
        expect(qwkm("g,njvwsijxitgmLwmp0t,u ธฟัสนพ ฆไรดะ lydmu")).toBe("เมื่อไหร่ประเทศไทยจะมี Taylor Swift สักที")
    })
})