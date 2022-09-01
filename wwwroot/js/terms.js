const TermsGenerator = {
    toggleCounter: 0,
    CreateTermMessage: content => {
        return m('div.option', [
            m('input.toggle[type=checkbox]', { id: 'term' + TermsGenerator.toggleCounter }),
            m('label.title', { for: 'term' + TermsGenerator.toggleCounter++ }, content.term),
            m(
                'div.content',
                content.description.map(d => m('p', d))
            ),
        ]);
    },
    contents: [],
    oninit: () => {
        return fetch('../terms.json')
            .then(r => r.json())
            .then(j => {
                TermsGenerator.contents = j.terms.map(c => TermsGenerator.CreateTermMessage(c));
                m.redraw();
            })
            .catch(e => console.log(e));
    },
    view: () => m('div.accordion', TermsGenerator.contents),
};

m.mount(document.getElementById('terms'), TermsGenerator);
