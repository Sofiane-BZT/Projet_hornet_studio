export const PIERCING_PAGE_QUERY = `
  query {

    pagePiercing {
      id
      pImagePrincipale {
        url
      }
      pTitrePrincipal
      pDescriptionPrincipale
      pTitreServices
      pDescriptionServices
      pServiceVisageTitre
      pServiceVisageImage {
        url
      }
      prixArcade
      prixNarine
      prixSeptum
      prixBridge
      prixPommette
      prixLabretDecale
      prixLabret
      prixMedusa
      prixSmiley
      pServiceOreilleTitre
      pServiceOreilleImage {
        url
      }
      prixLobe
      prixAntitragus
      prixTragus
      prixConch
      prixSnug
      prixDaith
      prixFlat
      prixAntihelix
      prixHelix
      prixRook
      prixIndustriel
      pServiceCorpsTitre
      pServiceCorpsImage {
        url
      }
      prixMicrodermal
      prixTeton
      prixNombril
    }
  }
`;
