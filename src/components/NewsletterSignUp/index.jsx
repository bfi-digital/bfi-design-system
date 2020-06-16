import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import Script from "react-load-script"
import { Headline } from "../Headline"

const newsletters = [
    {
        form: "191722FC90141D02184CB1B62AB3DC26D57AD7AD0DF253BE15DD122C605B740244DFF1ADDEE1A8DA861127EDFD99BF281A7016BD9F175EAF91CB858CC76D303F",
        title: "Get the latest from the BFI",
        inputName: "cm-ydyddhy-ydyddhy",
        desc: "Sign up for BFI news, features, videos and podcasts"
    },
    {
        form: "191722FC90141D02184CB1B62AB3DC26E20794FAFA78D9FA60ACCB19C164E45AE42D924DFE82298E9B8615EDF173C2AC653556BB282E9A62EE94B0F7297AF9AA",
        title: "Sign up to BFI news emails",
        inputName: "cm-ydyuvt-ydyuvt",
        desc: "Get the latest UK-wide updates, including screenings in your area"
    },
    {
        form: "191722FC90141D02184CB1B62AB3DC264D474401D6624110995C00D96B13FEB024C6E8EC202386DEBA38F536750AC87B0EA9637CF7681B77C918C64B72E64C9E",
        title: "Sign up for BFI Southbank emails",
        inputName: "cm-wyujhh-wyujhh",
        desc: "Hear about the best classic and new cinema, plus live events"
    },
    {
        form: "191722FC90141D02184CB1B62AB3DC260158C829FCA29473D5378450453328159C39A82882DAA74A31E0C1C199F2B0F371D629ECAFFC9452361EE55A21F7333E",
        title: "Sign up to BFI Blu-ray & DVD emails",
        inputName: "cm-yhlyklj-yhlyklj",
        desc: "Get updates on new releases and special offers"
    },
    {
        form: "191722FC90141D02184CB1B62AB3DC269B24313788DAA40AC00649EBBBFCD3C4D896535EC56AB1835E08D8BDACDDEAB296D2BC10BC166F3DA73DC1BA8609AB87",
        title: "Sign up for BFI London Film Festival emails",
        inputName: "cm-sihdky-sihdky",
        desc: "Get #LFF news, competitions and ticket release updates"
    },
    {
        form: "191722FC90141D02184CB1B62AB3DC26E6B8DF5420C53D8703DE8D9485EF38E8269FEEFF029174EF5C6516C55FBFD6F2841A9B81D512553E6E92541AEA208C20",
        title: "Sign up to BFI Flare emails",
        inputName: "cm-wiitdi-wiitdi",
        desc: "Get the latest #BFIFlare news and ticket release updates"
    },
    {
        form: "191722FC90141D02184CB1B62AB3DC266C24093B2CB484B868889D98D3EF6CA5D0C132AD94A492E99475E96B8760E01D1D4AFECD893CA6C8CF7A3FA0B1961E2C",
        title: "Sign up to BFI industry emails",
        inputName: "cm-ydlrldu-ydlrldu",
        desc: "Work in film or TV? Get the latest industry news and updates"
    },
    {
        form: "191722FC90141D02184CB1B62AB3DC26764120F3F20106D9BFD850078AA0DEB12A16B61865C52673991E57FE534415E3F557876EF79E7A0ADDA56F74082E0C42",
        title: "Sign up to BFI Education emails",
        inputName: "cm-yhlyhur-yhlyhur",
        desc: "Updates for teachers, including upcoming events and classroom resources"
    },
    {
        form: "191722FC90141D02184CB1B62AB3DC26EA829FBE2645495F11B171412C235E5638D1C0BF2034E0F8D771836826AFB98228EC7D996823E64C4D9F94E260EAB6D2",
        title: "Sign up to Sight & Sound emails",
        inputName: "cm-ydlrldk-ydlrldk",
        desc: "New features, classic pieces and the latest reviews and recommendations"
    },
    {
        form: "191722FC90141D02184CB1B62AB3DC268D328A874E0F895EEE04E7052B9B84C84D6210E2EC779036D3356362AC3AEB38E283B77D5A266D01EF89F8F2E187AE1D",
        title: "Are you 25 or under?",
        inputName: "cm-ydtktid-ydtktid",
        desc: "Get the latest £3 ticket updates plus more great offers"
    },
    {
        form: "191722FC90141D02184CB1B62AB3DC261B697C792BBA0DF49937A43CEB956A5B90AC27E4B65D1E775CB63E9F8D3310CF4B5BC15618F80CF3868E616AB50967F4",
        title: "BFI Player: see something different",
        inputName: "cm-skdml-skdml",
        desc: "Get updates on the latest rentals, subscription classics and free archive"
    },
    {
        form: "191722FC90141D02184CB1B62AB3DC2672EA560B1D1D38163241BC60E5CA1745B434CE1F751BA3361BDD63F3F50A8D271157F86EC33C4B1FE591E7ED94FDF6B3",
        title: "Are you a member of BFI FAN?",
        inputName: "cm-sujdry-sujdry",
        desc: "Get the weekly Indie Box Office column plus updates for FAN members"
    }
]

const Outer = styled.div`
    background: ${theme.lightest};
    margin: 0 auto;
    margin-bottom: ${theme.standardSpace*2}px;
    margin-top: ${theme.standardSpace}px;
    padding: 15px;
    display: block;
    max-width: ${theme.l};
    text-align: left;


    h3 {   
        margin-top: 0;
        margin-bottom: 15px;
    }
    p {
        margin-top: 0;
        margin-bottom: ${theme.standardSpace}px;
        max-width: 75%;
        @media screen and (min-width: ${theme.l}){
            max-width: 100%;
        }
    }

    @media screen and (min-width: ${theme.m}){
        padding: ${theme.standardSpace}px;
    }
    @media screen and (min-width: ${theme.xl}){
        max-width: ${theme.m};
        text-align: center;
    }
`
const NewsletterForm = styled.form`
    label {
        text-align: left;
    }
    input {
        display: block;
        margin-top: 5px;
        padding: 13px 10px;
        padding-top: 12px;        
        font-size: ${theme.fontSize_s};
        border: none;
        border-bottom: 5px solid ${theme.grey};
        transition: border .3s;
        width: 100%;

        &:hover {
            border-bottom: 5px solid ${theme.darkGrey};
        }
        &:focus {
            border-bottom: 5px solid ${theme.focus};
            outline: none;
        }
        @media screen and (min-width: ${theme.m}){
            width: 300px;
        }
    }
`
const NewsletterLabel = styled.label`
    display: inline-block;
    font-weight: 600;
    width: 100%;

    @media screen and (min-width: ${theme.s}){
        width: auto;
    }
`
const SubmitButton = styled.button`
    display: inline-block;
    position: relative;
    font-weight: bold;
    font-size: ${theme.fontSize_m};
    line-height: ${theme.lineHeight_m};
    color: ${theme.white};
    background: ${theme.black};
    text-decoration: none;
    padding: 10px ${theme.standardSpace}px;
    z-index: 2;
    width: 100%;
    text-align: center;
    cursor: pointer;
    border: none;
    width: 100%;
    @media screen and (min-width: ${theme.s}){
        width: auto;
    }

    :after {
        content: "";
        width: 100%;
        height: 5px;
        transition: height .3s;
        position: absolute;
        bottom: -5px;
        left: 0;
        background: ${theme.primary};
        z-index: -1;
    }

    &:hover, &:focus{
        color: ${theme.white};
        
        :after {
            height: calc(100% + 5px);
        }
    }
    &:focus{
        box-shadow: 0px 0px 0px 4px ${theme.focus};
        outline: none;
        height: auto;

        :after {
            bottom: 0;
            height: 100%;
        }
    }
    &:active{
        background: ${theme.black};
        box-shadow: none;
        transform: translate(0, 5px);   
        :after {
            height: 1px;
            bottom: -1px;
        }
    }
    @media screen and (min-width: ${theme.m}){
        width: auto;
    }
`

export const NewsletterSignUp = ({
    newsletterOption
}) => {
    return(
        <Outer>
            <Headline level={6} text={newsletters[newsletterOption].title} />
            <p>{newsletters[newsletterOption].desc}</p>
            <NewsletterForm className="js-cm-form" id="subForm" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id={newsletters[newsletterOption].form}>
                <NewsletterLabel>
                    Email 
                    <input autoComplete="Email" aria-label="Email" className="js-cm-email-input qa-input-email" id="fieldEmail" maxLength="200" name={newsletters[newsletterOption].inputName} required type="email" placeholder="Your email..." />
                </NewsletterLabel>
                <SubmitButton type="submit">Sign up</SubmitButton>
            </NewsletterForm>
            <Script
                url="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"
            />
        </Outer>
    )
}

NewsletterSignUp.propTypes = {
    /** 
     * The number that sets which newsletter sign up form this is.
    **/
    newsletterOption: PropTypes.number
}

NewsletterSignUp.defaultProps = {
    newsletterOption: 0
}
