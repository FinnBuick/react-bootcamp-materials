class Hello extends React.Component {
  static defaultProps = {
    from: "Baxter",
    bangs: 20,
  };
  render() {
    let bangs = "!".repeat(this.props.bangs);
    return (
      <div>
        <p>
          Hi {this.props.to} from {this.props.from}
          {bangs}
        </p>
      </div>
    );
  }
}
