arr = [3,25,209]
// arr2 = [10,300,5]


var dict = {
    "0": "Zero",
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine",
}

var numWordString = ""
// Loop over the numbers in the array
for(i = 0; i < arr.length; i++) {
    // Convert each number into a string
    var numString = arr[i].toString()
    for(j = 0; j < numString.length; j++) {

        // Verifies that the number is in the hashset
        if(numString[j] in dict) {
            numWordString += dict[numString[j]]
        }
    }

    // Only add the comma if it's not at the end of the array
    if(i < arr.length - 1) {
        numWordString += ","
    }
}

process.stdout.write(numWordString)
