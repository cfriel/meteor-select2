Package.describe({
  summary: "Meteor wrapper for the select2 library"
});

Package.on_use(function (api, where) {
    api.add_files('lib/select2.css', 'client');
    api.add_files('lib/select2.jquery.json', 'client');
    api.add_files('lib/select2.js', 'client');
    // api.add_files('lib/select2_locale_ar.js', 'client');
    // api.add_files('lib/select2_locale_ca.js', 'client');
    // api.add_files('lib/select2_locale_cs.js', 'client');
    // api.add_files('lib/select2_locale_da.js', 'client');
    // api.add_files('lib/select2_locale_de.js', 'client');
    // api.add_files('lib/select2_locale_el.js', 'client');
    // api.add_files('lib/select2_locale_en.js.template', 'client');
    // api.add_files('lib/select2_locale_es.js', 'client');
    // api.add_files('lib/select2_locale_et.js', 'client');
    // api.add_files('lib/select2_locale_eu.js', 'client');
    // api.add_files('lib/select2_locale_fi.js', 'client');
    // api.add_files('lib/select2_locale_fr.js', 'client');
    // api.add_files('lib/select2_locale_gl.js', 'client');
    // api.add_files('lib/select2_locale_he.js', 'client');
    // api.add_files('lib/select2_locale_hr.js', 'client');
    // api.add_files('lib/select2_locale_hu.js', 'client');
    // api.add_files('lib/select2_locale_id.js', 'client');
    // api.add_files('lib/select2_locale_is.js', 'client');
    // api.add_files('lib/select2_locale_it.js', 'client');
    // api.add_files('lib/select2_locale_ja.js', 'client');
    // api.add_files('lib/select2_locale_ko.js', 'client');
    // api.add_files('lib/select2_locale_lt.js', 'client');
    // api.add_files('lib/select2_locale_lv.js', 'client');
    // api.add_files('lib/select2_locale_mk.js', 'client');
    // api.add_files('lib/select2_locale_nl.js', 'client');
    // api.add_files('lib/select2_locale_no.js', 'client');
    // api.add_files('lib/select2_locale_pl.js', 'client');
    // api.add_files('lib/select2_locale_pt-BR.js', 'client');
    // api.add_files('lib/select2_locale_pt-PT.js', 'client');
    // api.add_files('lib/select2_locale_ro.js', 'client');
    // api.add_files('lib/select2_locale_ru.js', 'client');
    // api.add_files('lib/select2_locale_sk.js', 'client');
    // api.add_files('lib/select2_locale_sv.js', 'client');
    // api.add_files('lib/select2_locale_tr.js', 'client');
    // api.add_files('lib/select2_locale_ua.js', 'client');
    // api.add_files('lib/select2_locale_vi.js', 'client');
    // api.add_files('lib/select2_locale_zh-CN.js', 'client');
    // api.add_files('lib/select2_locale_zh-TW.js', 'client');
    api.add_files('lib/select2.min.js', 'client');
    api.add_files('lib/select2.png', 'client');
    api.add_files('lib/select2-spinner.gif', 'client');
    api.add_files('lib/select2x2.png', 'client');
});

Package.on_test(function (api) {
    api.add_files('select2_tests.js', 'client');
});
