const CharacterInfoGenerator = {
    /**
     * キャラクターの主人公との関係に関する事項を作成する
     * @param {{ image: string, name: string, sex: string, birthday: string, relationship_with_main_character: string[], attack: boolean, club: string, committee: string, grade_difference: number, singing: { part: string, level: string }, elementary_school: string, know_main_character_identity: boolean, special_identity: string[], request_voice_image: string }} characterInfo
     */
    CreateCharacterInformationAboutRelationshipWithMainCharacter: characterInfo => {
        if (
            characterInfo.attack == null ||
            characterInfo.grade_difference == null ||
            characterInfo.know_main_character_identity == null
        )
            return null;
        return m('section', [
            m('h4', '主人公との関係等'),
            m('table', [
                m('tr', [m('td', '攻略'), m('td', characterInfo.attack ? '可能' : '不可能')]),
                m('tr', [
                    m('td', '主人公との関係'),
                    m(
                        'td',
                        characterInfo.relationship_with_main_character == null
                            ? '特になし'
                            : characterInfo.relationship_with_main_character.map(v => v + ' / ').slice(0, -3)
                    ),
                ]),
                m('tr', [
                    m('td', '主人公の正体'),
                    m('td', characterInfo.know_main_character_identity ? '知っている' : '知らない'),
                ]),
                m('tr', [
                    m('td', '学年の違い'),
                    m(
                        'td',
                        characterInfo.grade_difference === 0
                            ? '同じ'
                            : Math.abs(characterInfo.grade_difference) +
                                  (characterInfo.grade_difference > 0 ? 'つ上' : 'つ下')
                    ),
                ]),
            ]),
        ]);
    },

    /**
     * キャラクターの基本情報を作成する
     * @param {{ image: string, name: string, sex: string, birthday: string, relationship_with_main_character: string[], attack: boolean, club: string, committee: string, grade_difference: number, singing: { part: string, level: string }, elementary_school: string, know_main_character_identity: boolean, special_identity: string[], request_voice_image: string }} characterInfo
     */
    CreateCharacterBasicInformation: characterInfo => {
        return m('section', [
            m('h4', '基本情報'),
            m('table', [
                m('tr', [m('td', '名前'), m('td', characterInfo.name)]),
                m('tr', [m('td', '性別'), m('td', characterInfo.sex)]),
                m('tr', [m('td', '誕生日'), m('td', characterInfo.birthday)]),
                m('tr', [m('td', '部活'), m('td', characterInfo.club == null ? '無所属' : characterInfo.club)]),
                m('tr', [
                    m('td', '委員会'),
                    m('td', characterInfo.committee == null ? '無所属' : characterInfo.committee),
                ]),
                m('tr', [m('td', '歌唱パート'), m('td', characterInfo.singing.part)]),
                m('tr', [m('td', '歌のレベル'), m('td', characterInfo.singing.level)]),
            ]),
        ]);
    },

    /**
     * キャラクター情報データを作成する
     * @param {{ image: string, name: string, sex: string, birthday: string, relationship_with_main_character: string[], attack: boolean, club: string, committee: string, grade_difference: number, singing: { part: string, level: string }, elementary_school: string, know_main_character_identity: boolean, special_identity: string[], request_voice_image: string }} characterInfo
     */

    CreateCharacterInformationContent: characterInfo => {
        const arr = [
            m('img', { src: characterInfo.image == null ? '../images/no_image.png' : characterInfo.image }),
            CharacterInfoGenerator.CreateCharacterBasicInformation(characterInfo),
        ];
        const CharacterInformationAboutRelationshipWithMainCharacter =
            CharacterInfoGenerator.CreateCharacterInformationAboutRelationshipWithMainCharacter(characterInfo);
        if (CharacterInformationAboutRelationshipWithMainCharacter !== null)
            arr.push(CharacterInformationAboutRelationshipWithMainCharacter);
        arr.push(m('h4', '声のイメージ'), m('p', characterInfo.request_voice_image));
        return m('div.content', arr);
    },

    toggleCounter: 0,

    /**
     * キャラクター情報一覧を作成する
     * @param {{ name: string, sex: string, birthday: string, relationship_with_main_character: string[], attack: boolean, club: string, committee: string, grade_difference: number, singing: { part: string, level: string }, elementary_school: string, know_main_character_identity: boolean, special_identity: string[], request_voice_image: string }} characterInfo
     */
    CreateCharacterInformationOption: characterInfo => {
        return m('div.option', [
            m('input.toggle[type=checkbox]', { id: 'character' + CharacterInfoGenerator.toggleCounter }),
            m('label.title', { for: 'character' + CharacterInfoGenerator.toggleCounter++ }, characterInfo.name),
            CharacterInfoGenerator.CreateCharacterInformationContent(characterInfo),
        ]);
    },
    contents: [],
    oninit: () => {
        return fetch('./characterprofile.json')
            .then(r => r.json())
            .then(j => {
                CharacterInfoGenerator.contents = j.characters.map(c =>
                    CharacterInfoGenerator.CreateCharacterInformationOption(c)
                );
                m.redraw();
            })
            .catch(e => console.log(e));
    },
    view: () => m('div.accordion', CharacterInfoGenerator.contents),
};

m.mount(document.getElementById('characters'), CharacterInfoGenerator);
