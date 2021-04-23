
/**
 * BING TRANSLATION HAS THE SAME ERROR AS GOOGLE
 */
// const { translate } = require('bing-translate-api');
// translate('আজিব-Ajib', null, 'en', true).then(res => {
//   console.log(res.translation);
// }).catch(err => {
//   console.error(err);
// });


const translate = require('@vitalets/google-translate-api');
const express = require('express')
const app = express()
const port = 3000
// Receive requests to http://localhost:3000/bn/Any text here
app.get('/bn/:text', (req, res) => {    
    // Translate chat text to Bengali
    translate(req.params.text, {to: 'bn'}).then(response => {
        console.log('Original alphabet: ' + response.text);
        console.log('Translated from: ' + response.from.language.iso);
        // Translate original alphabet to anything
        translate(response.text, {to: 'en'}).then(response => {            
            console.log('Translated from the original alphabet: ' + response.text);
            console.log('Translated from: ' + response.from.language.iso);
            // Show response to browser
            res.send(response.text);
        }).catch(err => {
            console.error(err);
        });
    }).catch(err => {
        console.error(err);
    });    
})
app.listen(port, () => {
    console.log(`Translator app listening at http://localhost:${port}`)
})
  

/**
 * TRY ARABIC
 */
// app.get('/ar/:text', (req, res) => {
//     translate(req.params.text, {to: 'ar'}).then(response => {
//         console.log('Response: ' + response.text);
//         console.log('Translated from: ' + response.from.language.iso);
//         translate(response.text, {to: 'en'}).then(response => {
//             console.log('Response: ' + response.text);
//             console.log('Translated from: ' + response.from.language.iso);
//             res.send(response.text);

//         }).catch(err => {
//             console.error(err);
//         });
//     }).catch(err => {
//         console.error(err);
//     });    
// })







// translate('আজিব-Ajib', {to: 'en'}).then(res => {
//     console.log('Response: ' + res.text);
//     console.log('Translated from: ' + res.from.language.iso);
// }).catch(err => {
//     console.error(err);
// });
