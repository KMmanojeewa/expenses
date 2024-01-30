module.exports = {
    purge: {
        enabled: false
    },
    theme: {
        extend: {
            screens: {
                xsm: '450px',
                smDown: {'max': '479px'},
                sm: '640px',
                mdDown: {'max': '767px'},
                md: '768px',
                lgDown: {'max': '1023px'},
                lg: '1024px',
                mlg: '1100px',
                xl: '1280px',
                xxl: '1440px',
                xxxl: '1600px',
            },
            maxWidth: {
                'contained': '1680px',
            },
            fontSize: {
                base: ['14px', '21px']
            },
        },

        fontFamily: {
            // body: ['brandon-grotesque', 'sans-serif'],
            // alt: ['brandon-grotesque', 'sans-serif']
            body: ['Heebo', 'sans-serif'],
            alt: ['Heebo', 'sans-serif']
        },
        container: {
            center: true,
        },
        colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
            primary: '#616161',
            secondary: '#B94700',
            danger: '#BF0909',
            lightGrey: '#F1F1F1',
            mediumGrey: '#616161',
            darkGrey: '#303030',
            darkBg: '#424242',
            lightGreen: '#F0F6F8',
            mediumGreen: '#7D9C9E',
            darkGreen: '#00A711',
            footerText: '#D8E3E7',
            borderGrey: '#707070',
            borderLightGrey: '#CACACA',
            textDark: '#2B2B2B',
            btnGrey: '#E8E8E8',
            tableHeader: '#1D1D1D',
            yellow: '#F7C600',
            lightYellow: '#FFF7DB',
            lightBlue: '#E0F2F8',
            btnGreen: '#E7F9DE'
        },
        spacing: {
            px: '1px',
            '0': '0',
            '1': '4px',
            '2': '8px',
            '3': '12px',
            '4': '16px',
            '5': '20px',
            '6': '24px',
            '7': '28px',
            '8': '32px',
            '9': '36px',
            '10': '40px',
            '11': '44px',
            '12': '48px',
            '13': '52px',
            '14': '56px',
            '15': '60px',
            '16': '64px',
            '17': '68px',
            '18': '72px',
            '19': '76px',
            '20': '80px',
            '21': '84px',
            '22': '88px',
            '23': '92px',
            '24': '96px',
            '25': '100px',
            '26': '104px',
            '27': '108px',
            '28': '112px',
            '29': '116px',
            '30': '120px',
            '31': '124px',
            '32': '128px'
        },
        customForms: theme => ({

            default: {
                'input, textarea, multiselect, select': {
                    borderRadius: '4px',
                    backgroundColor: '#f1f1f1',
                    borderWidth: '0px',
                    borderColor: theme('colors.inputColor'),
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    paddingLeft: '0',
                    paddingRight: '0',
                    color: '#405565',
                    '&::placeholder': {
                        color: theme('colors.inputPlaceHolder'),
                        opacity: '1',
                        fontSize: '16px',
                    },
                    minWidth: '20px' // override flex box default auto setting
                },
                checkbox: {
                    borderColor: theme('colors.green.700'),
                    borderWidth: '2px',
                    color: theme('colors.green.500'),
                    iconColor: theme('colors.white'),
                },
                radio: {
                    borderColor: theme('colors.green.700'),
                    borderWidth: '2px',
                    color: theme('colors.green.500'),
                    iconColor: theme('colors.white'),
                },
                lg: {
                    'input, textarea, multiselect, select': {
                        fontSize: '18px',
                        '&::placeholder': {
                            fontSize: '18px',
                        },
                    },
                },
            },
            error: {
                'input, textarea, multiselect, select': {
                    borderColor: theme('colors.red.100'),
                    color: theme('colors.black'),
                },
            }

        })
    },
    variants: {},
    plugins: [
        // require('@tailwindcss/custom-forms'),
        //
        // function({ addUtilities }) {
        //     const newUtilities = {
        //         '.absolute-center-x': {
        //             position: 'absolute',
        //             left: '50%',
        //             transform: 'translateX(-50%)',
        //         },
        //         '.absolute-center-y': {
        //             position: 'absolute',
        //             top: '50%',
        //             transform: 'translateY(-50%)',
        //         },
        //         '.absolute-center': {
        //             position: 'absolute',
        //             top: '50%',
        //             left: '50%',
        //             transform: 'translate(-50%, -50%)',
        //         },
        //     }
        //
        //     addUtilities(newUtilities)
        // }
    ]
}
