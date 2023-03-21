import akar_icons_heart from '../../../../images/svg/akar-icons_heart.svg';
import delBack from '../../../../images/svg/icon_delete.svg';
import no_Photo from '../../../../images/No-image-available.webp';
import {
  NoticesContainerItem,
  ContainerInfo,
  ImgItem,
  ContainerStatus,
  NoticeItemTitle,
  BtnLearnMore,
  BtnDelete,
  ItemContainer,
  TdTable,
  TdTable2,
  Table,
  NoticeContainerButton,
  BtnForFavorite,
} from './NoticeCategoryItem.styled';

export const NoticesCategoriesItem = ({ data }) => {
  return (
    <ItemContainer>
      <NoticesContainerItem>
        <div style={{ display: 'flex', justifyContent: 'end' }}></div>
        <ContainerInfo>
          <ContainerStatus>{data.status}</ContainerStatus>
          <BtnForFavorite>
            <img src={akar_icons_heart} alt="Add to favorite" />
          </BtnForFavorite>
          <ImgItem src={no_Photo} />
          <div>
            <NoticeItemTitle>Сute pet looking for a home</NoticeItemTitle>
            <div>
              <Table>
                <thead></thead>
                <tbody>
                  <tr>
                    <TdTable>Breed:</TdTable>
                    <TdTable2>{data.breed}</TdTable2>
                  </tr>
                  <tr>
                    <TdTable>Place:</TdTable>
                    <TdTable2>{data.location}</TdTable2>
                  </tr>
                  <tr>
                    <TdTable>Age:</TdTable>
                    <TdTable2>
                      {Math.round(
                        (Date.now() - Date.parse(data.date)) / 31536000 / 1000,
                      )}{' '}
                      years
                    </TdTable2>
                  </tr>
                </tbody>
                <tfoot></tfoot>
              </Table>
            </div>
          </div>
        </ContainerInfo>
        <NoticeContainerButton>
          <BtnLearnMore>Learn more</BtnLearnMore>
          <BtnDelete>
            Delete{' '}
            <img src={delBack} alt="heard" style={{ marginLeft: '12px' }} />
          </BtnDelete>
        </NoticeContainerButton>
      </NoticesContainerItem>
    </ItemContainer>
  );
};
