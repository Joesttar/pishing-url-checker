const UrlInput = ({url, onUrlChange}) => {
    return (
        <input 
        type="url"
        value={url}
        onChange={(event) => onUrlChange(event.target.value)}
        placeholder="Pon aqui el URL"        
        />
    )
}

export default UrlInput;