let mainElement = document.querySelector("main")
let headElement = document.querySelector("head")
let kata1Heading  = document.createElement("h1")
let kata1Info = document.createElement("div")
let kata2Heading = document.createElement("h1")
let kata2Info = document.createElement("div")
let kata3Heading = document.createElement("h1")
let kata3Info = document.createElement("div")
let kata4Heading = document.createElement("h1")
let kata4Info = document.createElement("div")
let kata5Heading = document.createElement("h1")
let kata5Info = document.createElement("div")
let kata6Heading = document.createElement("h1")
let kata6Info = document.createElement("div")
let kata7Heading = document.createElement("h1")
let kata7Info = document.createElement("div")
let kata8Heading = document.createElement("h1")
let kata8Info = document.createElement('div')
let kata9Heading = document.createElement("h1")
let kata9Info = document.createElement("div")
let kata10Heading = document.createElement("h1")
let kata10Info = document.createElement("div")
let kata11Heading = document.createElement("h1")
let kata11Info = document.createElement("div")
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
let kata12Heading = document.createElement("h1")
let kata12Info = document.createElement("div")
let kata13Heading = document.createElement("h1")
let kata13Info = document.createElement("div")
let kata14Heading = document.createElement("h1")
let kata14Info = document.createElement("div")
let kata15Heading = document.createElement("h1")
let kata15Info = document.createElement("div")
let kata16Heading = document.createElement("h1")
let kata16Info = document.createElement("div")
let kata17Heading = document.createElement("h1")
let kata17Info = document.createElement("div")
let kata18Heading = document.createElement("h1")
let kata18Info = document.createElement("div")

let kata19Heading = document.createElement("h1")
let kata19Info = document.createElement("div")
let kata19Squares = document.createElement("span")
kata19Info.className = "squares"

let katastyle = document.createElement("style")
headElement.append(katastyle)




mainElement.append(kata1Heading)
kata1Heading.append("kata 1")
mainElement.append(kata1Info)

let counter = 1
while (counter < 21) {
 kata1Info.append(counter + ", ")
  counter += 1
}

mainElement.append(kata2Heading)
kata2Heading.append("kata 2")
mainElement.append(kata2Info)

counter = 2
while (counter < 21) {
    kata2Info.append(counter + ", ")
  counter += 2
}

mainElement.append(kata3Heading)
kata3Heading.append("Kata 3")
mainElement.append(kata3Info)

let counter3 = 1
while (counter3 <= 20) {
  kata3Info.append(counter3 + ", ")
  counter3 += 2
}

mainElement.append(kata4Heading)
kata4Heading.append("Kata 4")
mainElement.append(kata4Info)

let counter4 = 5
while (counter4 <= 100) {
  kata4Info.append(counter4 + ", ")
  counter4 += 5
}

mainElement.append(kata5Heading)
kata5Heading.append("Kata 5")
mainElement.append(kata5Info)

for (counter5 = 1; counter5 <= 10; counter5 += 1) {
    kata5Info.append(counter5 * counter5 + ", ")
}

mainElement.append(kata6Heading)
kata6Heading.append("Kata 6")
mainElement.append(kata6Info)

let counter6 = 20
while (counter6 >= 1) {
  kata6Info.append(counter6 + ", ")
  counter6 -= 1
}

mainElement.append(kata7Heading)
kata7Heading.append("Kata 7")
mainElement.append(kata7Info)

let counter7 = 20
while (counter7 >= 2) {
  kata7Info.append(counter7 + ", ")
  counter7 -= 2
}

mainElement.append(kata8Heading)
kata8Heading.append("Kata 8")
mainElement.append(kata8Info)

let counter8 = 19
while (counter8 >= 1) {
  kata8Info.append(counter8 + ", ")
  counter8 -= 2
}

mainElement.append(kata9Heading)
kata9Heading.append("Kata 9")
mainElement.append(kata9Info)

let counter9 = 100
while (counter9 >= 5) {
  kata9Info.append(counter9 + ", ")
  counter9 -= 5
}

mainElement.append(kata10Heading)
kata10Heading.append("Kata 10")
mainElement.append(kata10Info)

for (counter10 = 10; counter10 > 0; counter10 -= 1) {
    kata10Info.append(counter10 * counter10 + ", ")
}

mainElement.append(kata11Heading)
kata11Heading.append("Kata 11")
mainElement.append(kata11Info)

for (counter11 = 0; counter11 < sampleArray.length; counter11 += 1) {
    kata11Info.append(sampleArray[counter11] + ", ")
}

mainElement.append(kata12Heading)
kata12Heading.append("Kata 12")
mainElement.append(kata12Info)

for (counter12 = 0; counter12 < sampleArray.length; counter12 += 1) {
    if (sampleArray[counter12] % 2 === 0) {
        kata12Info.append(sampleArray[counter12] + ", ")
    }
}

mainElement.append(kata13Heading)
kata13Heading.append("Kata 13")
mainElement.append(kata13Info)

for (counter13 = 0; counter13 < sampleArray.length; counter13 += 1) {
    if (sampleArray[counter13] % 2 === 1) {
        kata13Info.append(sampleArray[counter13] + ", ")
    }
}

mainElement.append(kata14Heading)
kata14Heading.append("Kata 14")
mainElement.append(kata14Info)

for (counter14 = 0; counter14 < sampleArray.length; counter14 += 1) {
    kata14Info.append(sampleArray[counter14] * sampleArray[counter14] + ", ")
}

mainElement.append(kata15Heading)
kata15Heading.append("Kata 15")
mainElement.append(kata15Info)

let forKata15 = 0
let xForKata15 = 20
for (counter15 = 1; counter15 <= xForKata15; counter15 += 1) {
    forKata15 += counter15
    if (counter15 === xForKata15) {
        kata15Info.append(counter15 + " = " + forKata15)
    } else {
        kata15Info.append(counter15 + " + ")
    }
    
}

mainElement.append(kata16Heading)
kata16Heading.append("Kata 16")
mainElement.append(kata16Info)


let kata16Last = sampleArray.length - 1
let kata16Add = 0
for (counter16 = 0; counter16 < sampleArray.length; counter16 += 1) {
    kata16Add += sampleArray[counter16]
    if (kata16Last === counter16) {
        kata16Info.append(sampleArray[counter16] + " = " + kata16Add)
    } else {
        kata16Info.append(sampleArray[counter16] + " + ")
    }
}

mainElement.append(kata17Heading)
kata17Heading.append("Kata 17")
mainElement.append(kata17Info)

smallestNumber = 0
for (counter17 = 0; counter17 < sampleArray.length; counter17 += 1) {
    if (smallestNumber === 0) {
        smallestNumber = sampleArray[counter17]
    } if (sampleArray[counter17] < smallestNumber) {
        smallestNumber = sampleArray[counter17]
    }
}
kata17Info.append(smallestNumber)


mainElement.append(kata18Heading)
kata18Heading.append("Kata 18")
mainElement.append(kata18Info)

largestNumber = 0
for (counter18 = 0; counter18 < sampleArray.length; counter18 += 1) {
    if (largestNumber === 0) {
        largestNumber = sampleArray[counter18]
    } if (sampleArray[counter18] > largestNumber) {
        largestNumber = sampleArray[counter18]
    }
}
kata18Info.append(largestNumber)


mainElement.append(kata19Heading)
kata19Heading.append("Kata 19")
mainElement.append(kata19Info)
for (counter19 = 1; counter19 <= 20; counter19 += 1) {
    katastyle.append("\.\squares \{\ width: 100px\;\
        height: 20px\;\
        background-color: grey\;\
    }")
    
}
