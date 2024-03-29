/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({

    "GENERIC_ERROR": "(దోషం {0})",
    "NOT_FOUND_ERR": "ఆ ఫైలు/directory దొరకలేదు.",
    "NOT_READABLE_ERR": "ఆ ఫైలు/directory చదవలేము.",
    "EXCEEDS_MAX_FILE_SIZE": "ఫైలు {0}MB కి అంటే ఎక్కువ అయితే {APP_NAME} లో తెరవలేము.",
    "FILE_EXISTS_ERR": "ఫైల్ లేదా డైరెక్టరీ ఇప్పటికే ఉంది.",
    "FILE": "ఫైలు",
    "FILE_TITLE": "ఫైలు",
    "DIRECTORY": "సంచయము",
    "DIRECTORY_TITLE": "సంచయం",
    "DIRECTORY_NAMES_LEDE": "సంచయ నామము",
    "FILENAMES_LEDE": "ఫైల్ పేరు",
    "FILENAME": "ఫైల్ పేరు",
    "DIRECTORY_NAME": "సంచయం పేరు",
    "OPEN_DIALOG_ERROR": "ఓపెన్ ఫైల్ డైలాగ్ చూపించినప్పుడు ఒక లోపం ఏర్పడింది. (లోపం {0})",
    "READ_DIRECTORY_ENTRIES_ERROR": "డైరెక్టరీ యొక్క విషయమును చదివేటప్పుడు ఒక దోషం జరిగినిది <span class='dialog-filename'>{0}</span>. (లోపం {1})",
    "ERROR_OPENING_FILE_TITLE": "ఫైలు తెరువుటలో దోషం",
    "ERROR_OPENING_FILE": "ఫైలు తెరువునప్పుడు ఒక దోషం జరిగినిది <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_OPENING_FILES": "క్రింది ఫైళ్ళను తెరువునప్పుడు ఒక దోషం జరిగినిది:",
    "ERROR_SAVING_FILE_TITLE": "ఫైలు బద్రపరచడంలో దోషం ఉన్నది",
    "ERROR_SAVING_FILE": "ఫైలు భద్రపరిచినప్పుడు ఒక దోషం జరిగినిది <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_FILE_TITLE": "ఫైలు పేరు మార్చడంలో లోపం",
    "ERROR_RENAMING_DIRECTORY_TITLE": "డైరక్టరీ పేరు మార్చడంలో లోపం",
    "ERROR_RENAMING_FILE": "ఫైలు యొక్క పేరు మార్చడంలో ఒక దోషం జరిగినిది <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_DIRECTORY": "డైరక్టరీ యొక్క పేరు మార్చడంలో ఒక దోషం జరిగినిది <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_FILE_TITLE": "ఫైలును తొలగించడంలో దోషం",
    "ERROR_DELETING_DIRECTORY_TITLE": "డైరక్టరీ తొలగించడంలో లోపం",
    "ERROR_DELETING_FILE": "ఫైలు తోలగించడంలో ఒక దోషం జరిగినిది <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_DIRECTORY": "డైరక్టరీ తొలగించడంలో ఒక దోషం జరిగినిది <span class='dialog-filename'>{0}</span>. {1}",
    "INVALID_FILENAME_TITLE": "చెల్లని ఫైల్ పేరు",
    "INVALID_DIRNAME_TITLE": "చెల్లని డైరక్టరీ పేరు",
    "INVALID_FILENAME_MESSAGE": "ఫైలు పేర్లు, ఏ సిస్టమ్ కు నిర్దేశించిన పదాలు ఉపయోగించని చుక్కలు (.) ముగుస్తుందని లేదా కింది ఏ అక్షరాల ఉపయోగించవచ్చు:<code class='emphasized'>{1}</code>",
    "INVALID_DIRNAME_MESSAGE": "డైరక్టరీ పేర్లు, ఏ సిస్టమ్ కు నిర్దేశించిన పదాలు ఉపయోగించని చుక్కలు (.) ముగుస్తుందని లేదా కింది ఏ అక్షరాల ఉపయోగించవచ్చు:<code class='emphasized'>{1}</code>",
    "ENTRY_WITH_SAME_NAME_EXISTS": "ఓక ఫైలు లేదా డైరక్టరీ యొక్క <span class='dialog-filename'>{0}</span> పేరుతో ఇప్పటికే ఉన్నది.",
    "ERROR_CREATING_FILE_TITLE": "ఫైలు సృష్టించుటలో దోషం",
    "ERROR_CREATING_DIRECTORY_TITLE": "డైరెక్టరీ సృష్టించుటలో దోషం",
    "ERROR_CREATING_FILE": "ఫైలు స్ఱుష్టించడంలో ఒక దోషం జరిగినిది <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_CREATING_DIRECTORY": "ఒక డైరక్టరీని స్రుష్టించడనికి ప్రయత్నించునప్పుడు ఒక దోషం జరిగినిది <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_MAX_FILES_TITLE": "ఫైళ్ళు ఇండెక్సింగ్ లో లోపం",
    "EXT_MODIFIED_TITLE": "బాహ్య మార్పులు",
    "EXT_MODIFIED_WARNING": "<span class='dialog-filename'>{0}</span> {APP_NAME}కి బయట డిస్కులో మార్చబడింది.<br /><br />మీరు ఫైల్ సేవ్ చేసి మరియు ఆ మార్పులను భర్తీ చేయాలనుకుంటున్నారా?",
    "EXT_MODIFIED_MESSAGE": "<span class='dialog-filename'>{0}</span>{APP_NAME}కి బయట డిస్క్లో మార్చబడింది, కానీ {APP_NAME}లో సేవ్ చేయని మార్పులు ఉన్నాయి.<br /><br />ఏ వెర్షన్ ఉంచాలనుకుంటున్నారు?",
    "EXT_DELETED_MESSAGE": "<span class='dialog-filename'>{0}</span>{APP_NAME}కి బయట డిస్క్లో మార్చబడింది, కానీ {APP_NAME}లో సేవ్ చేయని మార్పులు ఉన్నాయి.<br /><br />మీ మార్పులు ఉంచాలనుకుంటున్నారు?",
    "CONFIRM_FOLDER_DELETE_TITLE": "తొలగింపును ధృవీకరించండి",
    "CONFIRM_FOLDER_DELETE": "మీరు ఫోల్డర్ తొలగించడానికి నిశ్చయించుకున్నారా <span class='dialog-filename'>{0}</span>?",
    "FILE_DELETED_TITLE": "ఫైలు తొలగించబడింది",
    "DONE": "పూర్తయింది",
    "OK": "సరే",
    "CANCEL": "రద్దుచేయి",
    "SAVE_AND_OVERWRITE": "తిరిగివ్రాయి",
    "DELETE": "తొలగించు",
    "BUTTON_YES": "అవును",
    "BUTTON_NO": "కాదు",
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "ప్రస్తుత కర్సరి స్థానానికి త్వరిత మార్పులు అందుబాటు లేవు",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "CSS త్వరిత మార్పు: కర్సరుని పేరుని ఒక తరగతి మీద వుంచుము",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "CSS త్వరిత మార్పు: తరగతి లక్షనం అసంపూర్తి",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "CSS త్వరిత మార్పు: ఐడీ లక్షనం అసంపూర్తి",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "CSS త్వరిత మార్పు: కర్సరుని ట్యాగ్, తరగతి, లేదా ఐడి మీద వుంచుము",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "CSS టైమింగ్ ఫంక్షన్ త్వరిత మార్చు: చెల్లని వాక్యనిర్మాణం",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "JS త్వరిత మార్పు: కర్సరుని ఫంక్షన్ పేరులొ వుంచుము",
    "BUTTON_NEW_RULE": "కొత్త నిబంధన",
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "ప్రస్తుత కర్సరికి త్వరిత డాక్స్ అందుబాతులొ లేవు",
    "CMD_FILE_NEW": "కొత్త ఫైల్",
    "CMD_FILE_NEW_FOLDER": "కొత్త సంచయం",
    "CMD_FILE_RENAME": "పేరుమార్చు",
    "CMD_FILE_DELETE": "తొలగించు",
    "CMD_FILE_DOWNLOAD": "దిగుమతి చేయి",
    "CMD_CUT": "కత్తిరించు",
    "CMD_COPY": "నకలుతీయి",
    "CMD_PASTE": "అతికించు",
    "CMD_SELECT_ALL": "అన్నిటిని ఎంపికచేయి",
    "CMD_TOGGLE_QUICK_EDIT": "శీఘ్ర సవరణ",
    "CMD_TOGGLE_QUICK_DOCS": "శీఘ్ర పత్రాలు",
    "DND_UNSUPPORTED_FILE_TYPE": "మద్దతీయని ఫైల్ రకము",
    "DND_ERROR_UNZIP": "ఫైలు విప్పలేకపొతున్నాం",
    "DND_ERROR_UNTAR": "ఫైలు untar చేయలేకపొతున్నాం",
    "DND_SUCCESS_UNZIP_TITLE": "అన్ౙిప్ విజయవంతంగా ముగిసింది",
    "DND_SUCCESS_UNTAR_TITLE": "Untar విజయవంతంగా ముగిసింది",
    "DND_SUCCESS_UNZIP": "విజయవంతంగా అన్జిప్ చేయబడ్డాయి <b>{0}</b>.",
    "DND_SUCCESS_UNTAR": "విజయవంతంగా untar చెయ్యబడినది <b>{0}</b>.",
    "IMAGE_SAVE_WITH_FILTERS": "అమలు",
    "IMAGE_RESET_FILTERS": "రద్దుచేయి",
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP": "ప్రస్తుత రంగు",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP": "అసలు రంగు",
    "COLOR_EDITOR_RGBA_BUTTON_TIP": "RGBa ఫార్మాట్",
    "COLOR_EDITOR_HEX_BUTTON_TIP": "Hex ఫార్మాట్",
    "COLOR_EDITOR_HSLA_BUTTON_TIP": "HSLa ఫార్మాట్",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR": "{0} ({1} వాడారు)",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL": "{0} ({1} వాడారు)",
    "CMD_JUMPTO_DEFINITION": "డెఫినిషన్కి వెల్లుము",
    "CMD_SHOW_PARAMETER_HINT": "పరామితి సూచన చుపుము",
    "NO_ARGUMENTS": "<పరామితులు లెవు>",
    "DETECTED_EXCLUSION_TITLE": "JavaScript ఫైలు తీర్మానం సమస్య",
    "CMD_ENABLE_QUICK_VIEW": "హోవర్ త్వరిత వీక్షన",
    "DOCS_MORE_LINK": "మరింత చదవండి",
    "UPLOAD_FILES_DIALOG_HEADER": "ఫైల్‌లను అప్‌లోడ్ చేయి",
    "DRAG_AREA_UPLOAD_FILES_DIALOG_TEXT": "...లేదా ఫైళ్లను ఇక్కడికి డ్రాగ్ చెయ్యండి.",
    "DROP_AREA_UPLOAD_FILES_DIALOG_TEXT": "OK, ఫైళ్లు విడుదల చెయ్యండి!",
    "UPLOADING_INDICATOR": "ఎక్కిస్తున్నది...",
    "BUTTON_FROM_YOUR_COMPUTER": "మీ కంప్యూటర్ నుండి...",
    "TAKE_A_SELFIE": "ఒక స్వీయ చిత్ర తీసుకొనుము...",
    "CMD_MOVE_FILE": "దీనికి తరలించు...",
    "PROJECT_ROOT": "ప్రాజెక్టు రూటు",
    "PICK_A_FOLDER_TO_MOVE_TO": "సంచికను ఎంచుకోండి",
    "ERROR_MOVING_FILE_DIALOG_HEADER": "తరలించు లోపం",
    "UNEXPECTED_ERROR_MOVING_FILE": "{0} నుండి {1} తరలించడానికి ప్రయత్నిస్తున్నప్పుడు ఊహించని దోషం జరిగిండి",
    "ERROR_MOVING_FILE_SAME_NAME": "ఒక ఫైలు లేద ఫోల్డర్ {0} పేరుతొ {1}లొ వుంది. ఒకదాని పేరు మార్చి కొనసంచడానికి ప్రయత్నించండి.",
    "CONSOLE_CLEAR": "తుడిచివేయి"
});
