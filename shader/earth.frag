#version 330 core
out vec4 FragColor;

in vec3 FragPos;
in vec3 Normal;
in vec2 TexCoords;

uniform sampler2D texture_diffuse1;
uniform vec3 lightPos;
uniform vec3 moonPos;
uniform vec3 viewPos;
uniform vec3 lightColor;

void main()
{
    vec3 norm = normalize(Normal);
    vec3 lightDir = normalize(lightPos - FragPos);
    vec3 viewDir = normalize(viewPos - FragPos);

    // Ambient
    vec3 ambient = 0.2 * lightColor;

    // Diffuse
    float diff = max(dot(norm, lightDir), 0.0);
    vec3 diffuse = diff * lightColor;

    // Specular
    vec3 reflectDir = reflect(-lightDir, norm);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32);
    vec3 specular = spec * lightColor * 0.5;

    // Eclipse shadow simulation
    vec3 moonDir = normalize(moonPos - lightPos);
    vec3 fragDir = normalize(FragPos - lightPos);
    float alignment = dot(moonDir, fragDir);

    float shadowFactor = 1.0;
    if (alignment > 0.999)
        shadowFactor = 0.2;
    else if (alignment > 0.995)
        shadowFactor = 0.5;

    // Combine
    vec3 color = texture(texture_diffuse1, TexCoords).rgb;
    vec3 lighting = (ambient + shadowFactor * (diffuse + specular)) * color;

    FragColor = vec4(lighting, 1.0);
}
