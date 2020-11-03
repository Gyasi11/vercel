export default function ContactForm() {
    return (
        <form action="https://formspree.io/f/xvovrwkz" method="POST">
        <input type="text" name="name"/>
        <input type="email" name="_replyto"/>
        <input type="submit" value="Send"/>
      </form>
    )
}