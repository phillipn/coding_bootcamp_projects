from __future__ import print_function

def assignLetter(percentGrade):
    if percentGrade >= 90:
        return 'A'
    elif percentGrade >= 80:
        return 'B'
    elif percentGrade >= 70:
        return 'C'
    elif percentGrade >= 60:
        return 'D'

student = 1

while True:
    try:
        percentGrade = int(raw_input("Score: "))
        if percentGrade > 100 or percentGrade < 60:
            raise ValueError
    except ValueError:
        print("Number between 60 and 100, please!")
        continue
    else:
        letter = assignLetter(percentGrade)

        # impossible to not print new line after raw input, so we use this.
        # prints one line up and several characters to the right
        print('\033[{}C\033[1A'.format(len(str(percentGrade)) + 7), end="")
        print("; Your grade is {}".format(letter))
        student +=  1
        if(student > 10):
            print("End of the program. Bye!")
            break
