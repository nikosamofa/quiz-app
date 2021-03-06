/**
 * Example store structure
 */
// const store = {
//   // 5 or more questions are required
//   questions: [
//     {
//       question: 'What color is broccoli?',
//       answers: [
//         'red',
//         'orange',
//         'pink',
//         'green'
//       ],
//       correctAnswer: 'green'
//     },
//     {
//       question: 'What is the current year?',
//       answers: [
//         '1970',
//         '2015',
//         '2019',
//         '2005'
//       ],
//       correctAnswer: '2019'
//     }
//   ],
//   quizStarted: false,
//   questionNumber: 0,
//   score: 0
// };

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
//////  Define Global Variables   ///////


//Question database
const store = {
    qns: [
        {
            question: 'Just how well do you know the Great Wonders of the world?',
            buttonText: ['Start Quiz'],
            state: 'start',
            imageSrc: 'images/pyramid.jpg',
            feedback: [],
            correctAnswer: '',
        },
        {
            //1 [0]
            question: 'In which modern-day country do we find petra?',
            imageSrc: 'images/petra-jordan.jpg',
            imageAlt: 'picture of Petra Jordan',
            answers: [
                'Egypt',
                'Israel',
                'Jordan'
            ],
            correctAnswer: 'Jordan',
            buttonText: ['Submit Answer', 'Next Question'],
            state: 'question',
            feedback: ['Awesome! ', 'The correct answer is Jordan.'],
        },
        {
            //2 [1]
            question: 'What does Machu Picchu mean in Quechua?',
            imageSrc: 'images/machu-picchu.jpg',
            imageAlt: 'picture of machu picchu during the day',
            answers: [
                'Old peak',
                'Edge of the mountain',
                'Rocky peak'
            ],
            correctAnswer: 'Old peak',
            buttonText: ['Submit Answer', 'Next Question'],
            state: 'question',
            feedback: ['Awesome! ', 'The correct answer is the Old Peak.'],
        },
        {
            //3 [2]
            question: 'The Chichen Itza was built by whom?',
            imageSrc: 'images/chichen-itza.jpg',
            imageAlt: 'picture of the Chichen Itza on sun set',
            answers: [
                'Mayans',
                'Egyptians',
                'Incas'
            ],
            correctAnswer: 'Mayans',
            buttonText: ['Submit Answer', 'Next Question'],
            state: 'question',
            feedback: ['Awesome! ', 'The correct answer is the Mayans.'],
        },
        {
            //4 [3]
            question: 'In ancient times, what was the name of the colosseum?',
            imageSrc: 'images/colosseum-rome.jpg',
            imageAlt: 'picture of the colosseum in the modern day setting',
            answers: [
                'Flavian Amphitheater',
                'Maximus',
                'Golden Circus'
            ],
            correctAnswer: 'Flavian Amphitheater',
            buttonText: ['Submit Answer', 'Next Question'],
            state: 'question',
            feedback: ['Awesome! ', 'The correct answer is Flavian Amphitheater.'],
        },
        {
            //5 [4]
            question: 'In which city in India is the Taj Mahal Located?',
            imageSrc: 'images/taj-mahal.jpg',
            imageAlt: 'picture of the Taj Mahal on sunset',
            answers: [
                'Agra',
                'Delhi',
                'Mumbai'
            ],
            correctAnswer:
                'Agra',
            buttonText: ['Submit Answer', 'Next Question'],
            state: 'question',
            feedback: ['Awesome! ', 'The correct answer is Agra.'],
        },
        {
            message: 'Finished Quiz',
            imageSrc: 'images/5starts.png',
            buttonText: ['Restart Quiz'],
            answer: '',
            feedback: [],
            state: 'last',
        },
    ],
    hasAnswered: false,
    quizStart: false,
    questionNumber: 0,
    numRight: 0,
}


//The template generating functions
//this is the start page template
function startPageTemplate(selection) {
    return `
  <div class="wrapper">
  <form id="js-form">
  <div>
  <div class="title-image group">
   <input type="image" src="images/pyramid-1.jpg" alt="Picture of the pyramids in egypt" class="img"></input>
  </div>
    <div class="item-1">  
    <h2 class="js-form-title title intro">${selection.question}</h2>
   <hr>
    <p>The Seven Wonders of the World or the Seven Wonders of the Ancient World is a list of remarkable constructions of classical antiquity given by various authors in guidebooks or poems popular among ancient Hellenic tourists.
     Although the list, in its current form, did not stabilise until the Renaissance, the first such lists of seven wonders date from the 2nd–1st century BC.</span> </p>
    <p><span class="start-title">Lets findout just how much you know about the Great Wonders Of The World</span></p>
    <button  class="submit start next" type="submit">${selection.buttonText[0]}</button>
  </div>
  </div>
  <p class='hide'></p>
  </form>
  </div>`
};


//this is the question page template
function questionTemplate(selection) {
    return `
  <form class= "js-submit-feedback-form">
  <div class="wrapper">
  <div>
    <div class="js-socre-div scoreBoard">
    <ul>
    <li><p> Question: <span class="js-counter subtitle">${store.questionNumber} Of 5</span></p></li>
    <li><p>your Score: <span class="js-socre"> ${store.numRight}</span></p> </li>
    </ul>
    </div>
  <div class="js-image-wrapper item-1">
  <input type="image" src="${selection.imageSrc}" alt="${selection.imageAlt}">
  </div>
  <div>
    <div class="js-question">
     <h3>${selection.question}</h3>
    <div class="answer-div" id="answer-one">
      <input  type="radio" class="answer" name="answers" id="answer-one" value="${selection.answers[0]}" required> ${selection.answers[0]}
    </div>
    <div class="answer-div" id="answer-two">
      <input type="radio" class="answer" name="answers" id="answer-two" value="${selection.answers[1]}" required> ${selection.answers[1]}
    </div>
    <div class="answer-div" id="answer-three">
     <input type="radio" class="answer" name="answers" id="answer-three" value ="${selection.answers[2]}" required> ${selection.answers[2]}
    </div> 
    <p class="hide"></p>
    <div class="item-1">
    <button class="submit feedback" type="submit">${selection.buttonText[0]}</button>
    </div> 
  </div>   
  </div>
  </div>
  </div>  
</form>`
}


function lastPageTemplate(selection) {
    return `
  <div class="group">
  <div class="item-1">
  <form id="js-last-page-form">
  <h2 class="js-form-title title start-title">${selection.message}</h2>
  <div class="stars">
  <input type="image" src="images/camera.jpg" alt="${selection.imageAlt}" >
  </div>
  <p class='finished-feedback'>You Scored ${store.numRight} out of 5 correct!</p>
  <hr>
  <button class="submit restart" type="submit">${selection.buttonText[0]}</button>  
</form>
</div>
</div>`;
}


//creating page slides 
function createTemplate(selection) {
    switch (selection.state) {
        case 'start':
            return startPageTemplate(selection);
        case 'question':
            return questionTemplate(selection);
        case 'last':
            return lastPageTemplate(selection);
    }
}


//Switch through questions 
function getIndex() {
    let index = store.questionNumber;
    return index;
}


//changing the indext
function updateIndex() {
    if (getIndex() < store.qns.length - 1) {
        store.questionNumber++;
    }
    else {
        store.questionNumber = 1;
    }
}


//tracking scores 
function scoreTrack() {
    store.numRight++;
};


//refreash score 
function refreashSocre() {
    store.numRight = 0;
};

//refreshing quiz back to start
function refreashQuiz() {
    store.questionNumber = 1;
};


//checking for answers 
function checkAnswer(input, entry) {
    if (input === entry.correctAnswer) {
        return true;
    }
    else {
        return false;
    }
};


//The rendering function that renders HTML and JS onto the DOM
function render() {
    const view = store.qns[getIndex()];
    const pageView = createTemplate(view);
    $('.main').html(pageView);
}


//Event handler functions 
//start the quiz
function startTheQuiz() {
    $('#js-form').on('submit', '.start', event => {
        event.preventDefault();
        store.startTheQuiz = true;
        nextQuestion();
        render();
    })
}


//feedback for question 
function positiveFeedback(qns) {
    $('.hide').text(qns.feedback[0] + 'you answered Question: ' + `${store.questionNumber}` + ' correct!');
}


function negativeFeedback(qns) {
    $('.hide').text(qns.feedback[1] + ' But keep going!');
};



function givingFeedback(input, qns) {
    if (checkAnswer(input, qns) === true) {
        scoreTrack()
        return positiveFeedback(qns);
    }
    else {
        return negativeFeedback(qns);
    }
}


//check for when the question has been answered 
function userAnswered() {
    store.hasAnswered = !store.hasAnswered;
}


function checkWhenAnswered(input, qns) {
    if (!store.hasAnswered) {
        givingFeedback(input, qns)
    }
    else {
        userAnswered();
        render();
    }
}


function changingSubmitClass(qns) {
    $('.feedback').addClass('next');
    $('.feedback').text(qns.buttonText[1]);
    $('.feedback').removeClass('feedback');
};


//event hanlers 
function getFeedback() {
    $('main').on('submit', '.js-submit-feedback-form', event => {
        event.preventDefault();
        let qns = store.qns[getIndex()];
        let selection = $('input[name="answers"]:checked').val();
        checkWhenAnswered(selection, qns);
        changingSubmitClass(qns);
    })
}


//change attributes for the next button
function changeNextButtonClass(qns) {
    $('.next').addClass('feedback');
    $('.next').text(qns.buttonText[0]);
    $('.next').removeClass('next');
}


//changing questions 
function nextQuestion() {
    $('.main').on('click', '.next', event => {
        event.preventDefault();
        let qns = store.qns[getIndex()];
        updateIndex();
        changeNextButtonClass(qns);
        render();
    })
}


function tryAgain() {
    $('#js-last-page-form').on('submit', '.restart', event => {
        event.preventDefault();
        refreashQuiz();
        refreashSocre();
        render();
    });
}


//call back function for all functions 
function apps() {
    render();
    startTheQuiz();
    getFeedback();
    nextQuestion();
    tryAgain();
};


$(apps);